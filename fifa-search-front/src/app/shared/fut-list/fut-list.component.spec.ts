import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FutListComponent } from './fut-list.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/models/card';
import { HttpClientModule } from '@angular/common/http';
import { FutSearchComponent } from '../fut-search/fut-search.component';
import { of, throwError } from 'rxjs';
import { cardMock, cardsMock } from 'src/app/models/test/mock-models';

describe('FutListComponent', () => {
  let component: FutListComponent;
  let fixture: ComponentFixture<FutListComponent>;
  let futApiService: FutApiService;

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
    }));

    it('should handle API error correctly', fakeAsync(() => {
      spyOn(futApiService, 'getAllCards').and.returnValue(throwError({}));

      // Call the getAllCards method
      component.getAllCards();

      // Use tick() to simulate the passage of time and resolve the observable
      tick();

      // Expect that futApiService.getAllCards was called
      expect(futApiService.getAllCards).toHaveBeenCalled();

      // Expect that the apiError property was set to true
      expect(component.apiError).toBeTrue();
    }));
  });

  it('should expected "lw" to UpperCase "LW"', () => {
    const position = cardMock.position;
    component.formatUpperCase(position);
    expect(component.formatUpperCase(position)).toEqual("LW")
  })
});
