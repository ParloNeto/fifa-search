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


  it('should expected "manchester-united" without hyphen', () => {
    const club = "manchester-united";
    component.formatWithoutHyphen(club);
    expect(component.formatWithoutHyphen(club)).toEqual("manchester united")
  })

  it('should return the correct path for nation', () => {
    const nation = 'brazil';
    const expectedPath = '../../../../../assets/images/nation/brazil.png';

    const result = component.imagePath(nation);

    expect(result).toEqual(expectedPath);
  });

  it('should return the correct path for club', () => {
    const club = 'manchester';
    const expectedPath = '../../../../../assets/images/clubbadges/manchester.png';

    const result = component.imagePath(undefined, club);

    expect(result).toEqual(expectedPath);
  });

  it('should return the correct path for club when both nation and club are provided', () => {
    const nation = 'brazil';
    const club = 'manchester';
    const expectedPath = '../../../../../assets/images/clubbadges/manchester.png';

    const result = component.imagePath(nation, club);

    expect(result).toEqual(expectedPath);
  });

});
