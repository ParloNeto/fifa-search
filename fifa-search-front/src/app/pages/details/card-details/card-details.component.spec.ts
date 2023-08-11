import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CardService } from 'src/app/service/card.service';
import { ClubService } from 'src/app/service/club.service';
import { NationService } from 'src/app/service/nation.service';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/models/card';
import { cardMock } from 'src/app/models/test/mock-models';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;
  let mockFutApiService: any;
  let mockCardService: any;
  let mockNationService: any;
  let mockClubService: any;

  const mockCardData: Card = cardMock;

  beforeEach(async () => {
    
    mockFutApiService = jasmine.createSpyObj('FutApiService', ['getCard']);
    mockCardService = jasmine.createSpyObj('CardService', ['getSpecificType']);
    mockNationService = jasmine.createSpyObj('NationService', ['getSpecificNation']);
    mockClubService = jasmine.createSpyObj('ClubService', ['getSpecificClub']);

    await TestBed.configureTestingModule({
      declarations: [CardDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: FutApiService, useValue: mockFutApiService },
        { provide: CardService, useValue: mockCardService },
        { provide: NationService, useValue: mockNationService },
        { provide: ClubService, useValue: mockClubService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;

    mockFutApiService.getCard.and.returnValue(of(mockCardData));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
