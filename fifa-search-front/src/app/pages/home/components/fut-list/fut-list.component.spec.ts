import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FutListComponent } from './fut-list.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/core/models/card.interface';
import { HttpClientModule } from '@angular/common/http';
import { FutSearchComponent } from '../fut-search/fut-search.component';
import { of } from 'rxjs';
import { cardsMock } from 'src/app/core/models/test/mock-models';

describe('FutListComponent', () => {
  let component: FutListComponent;
  let fixture: ComponentFixture<FutListComponent>;
  let futApiService: FutApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientModule, FutListComponent, FutSearchComponent],
    providers: [FutApiService],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutListComponent);
    component = fixture.componentInstance;
    futApiService = TestBed.inject(FutApiService);
    fixture.detectChanges();
  });


  // describe('getSearch', () => {
  //   it('should filter cards based on search value', () => {
  //     const mockCards: Card[] = cardsMock;
  //     component['setCards'] = mockCards;
      

  //     const searchValue = 'Neymar';
  
  //     component.getSearch(searchValue);

  //     expect(component.cards.length).toBe(1);
  //     expect(component.cards[0].firstName).toContain(searchValue);
  //   });

  //   it('should filter cards correctly with uppercase search value', () => {
  //     const mockCards: Card[] = cardsMock;
  //     component['setCards'] = mockCards;

  //     const searchValue = 'JR';

  //     component.getSearch(searchValue);

  //     expect(component.cards.length).toBe(1);
  //     expect(component.cards[0].lastName.toUpperCase()).toContain(searchValue);
  //   });
  // });

  // describe('getAllCards', () => {
  //   it('should fetch and set cards correctly', fakeAsync(() => {
  //     const mockCards = cardsMock;
  //     spyOn(futApiService, 'httpListCards$').and.returnValue(of(mockCards));

  //     component.OnInit();

  //     tick();

  //     expect(futApiService.getAllCards).toHaveBeenCalled();

  //     expect(component['setCards']).toEqual(mockCards);
  //     expect(component.cards).toEqual(mockCards);
  //   }))});


  it('should expected "manchester-united" without hyphen', () => {
    const club = "manchester-united";
    component.formatWithoutHyphen(club);
    expect(component.formatWithoutHyphen(club)).toEqual("manchester united")
  })

});
