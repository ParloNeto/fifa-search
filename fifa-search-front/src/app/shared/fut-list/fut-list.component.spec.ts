import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FutListComponent } from './fut-list.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/models/card';
import { HttpClientModule } from '@angular/common/http';
import { FutSearchComponent } from '../fut-search/fut-search.component';
import { of, throwError } from 'rxjs';
import { cardMock, cardsMock, mockListNation } from 'src/app/models/test/mock-models';
import { NationService } from 'src/app/service/nation.service';

describe('FutListComponent', () => {
  let component: FutListComponent;
  let fixture: ComponentFixture<FutListComponent>;
  let futApiService: FutApiService;
  let nationService: NationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutListComponent, FutSearchComponent],
      imports: [HttpClientModule],
      providers: [FutApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutListComponent);
    component = fixture.componentInstance;
    futApiService = TestBed.inject(FutApiService);
    nationService = TestBed.inject(NationService);
    fixture.detectChanges();
  });


  describe('getSearch', () => {
    it('should filter cards based on search value', () => {
      const mockCards: Card[] = cardsMock;
      component['setCards'] = mockCards;

      const searchValue = 'Neymar';
  
      component.getSearch(searchValue);

      expect(component.cards.length).toBe(1);
      expect(component.cards[0].firstName).toContain(searchValue);
    });

    it('should filter cards correctly with uppercase search value', () => {
      const mockCards: Card[] = cardsMock;
      component['setCards'] = mockCards;

      const searchValue = 'JR';

      component.getSearch(searchValue);

      expect(component.cards.length).toBe(1);
      expect(component.cards[0].lastName.toUpperCase()).toContain(searchValue);
    });
  });

  describe('getAllCards', () => {
    it('should fetch and set cards correctly', fakeAsync(() => {
      const mockCards = cardsMock;
      spyOn(futApiService, 'getAllCards').and.returnValue(of(mockCards));

      component.getAllCards();

      tick();

      expect(futApiService.getAllCards).toHaveBeenCalled();

      expect(component['setCards']).toEqual(mockCards);
      expect(component.cards).toEqual(mockCards);
    }))});

    describe('getAllNations', () => {
      it('should activate the getAllNations method', fakeAsync(() => {
        spyOn(nationService, 'getAllNations').and.returnValue(of(mockListNation));
  
        component.getAllNations();
  
        tick();
  
        expect(nationService.getAllNations).toHaveBeenCalled();
        expect(component.nationUrl).toBeTruthy();
      }));

    it('should handle API error correctly', fakeAsync(() => {
      spyOn(futApiService, 'getAllCards').and.returnValue(throwError({}));

      component.getAllCards();

      tick();

      expect(futApiService.getAllCards).toHaveBeenCalled();

      expect(component.apiError).toBeTrue();
    }));
  });

  it('should expected "lw" to UpperCase "LW"', () => {
    const position = cardMock.position;
    component.formatUpperCase(position);
    expect(component.formatUpperCase(position)).toEqual("LW")
  })

  it('should expected "manchester-united" without hyphen', () => {
    const club = "manchester-united";
    component.formatWithoutHyphen(club);
    expect(component.formatWithoutHyphen(club)).toEqual("manchester united")
  })

});
