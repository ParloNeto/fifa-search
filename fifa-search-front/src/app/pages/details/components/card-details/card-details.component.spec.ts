import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CardService } from 'src/app/service/card.service';
import { ClubService } from 'src/app/service/club.service';
import { NationService } from 'src/app/service/nation.service';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/core/models/card';
import { cardMock, clubMock, mockTypeCard } from 'src/app/core/models/test/mock-models';

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
    mockCardService = jasmine.createSpyObj('CardService', ['getSpecificType', 'cardTypeAdjustmentCss']);
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

  it('should set nationUrl when getNation is called', () => {
    const mockNationCard = { nation: "brazil", nationUrl: 'mockNationUrl' };
    mockNationService.getSpecificNation.and.returnValue(of(mockNationCard));

    component.card = mockCardData;
    component.getNation();
    expect(component.nationUrl).toBe(mockNationCard.nationUrl);
  });

  it('should set clubUrl when getClub is called', () => {
    const mockClubCard = clubMock;
    mockClubService.getSpecificClub.and.returnValue(of(mockClubCard));

    component.card = mockCardData;
    component.getClub();
    expect(component.clubUrl).toBe(mockClubCard.clubUrl);
  });

  it('should set properties from getSpecificType response', () => {
    const mockSpecificTypeResponse = mockTypeCard;

    mockCardService.getSpecificType.and.returnValue(of(mockSpecificTypeResponse));

    component.getPhotoType();

    expect(component.photoUrl).toBe(mockSpecificTypeResponse.photoUrl);
    expect(component.colorFontName).toBe(mockSpecificTypeResponse.colorText.colorFontName);
    expect(component.colorOverall).toBe(mockSpecificTypeResponse.colorText.colorOverall);
    expect(component.colorPosition).toBe(mockSpecificTypeResponse.colorText.colorPosition);
    expect(component.colorAttributes).toBe(mockSpecificTypeResponse.colorText.colorAttributes);
  });

  it('should call methods when ngOnInit is called', () => {
    const mockCardResponse = cardMock;

    mockFutApiService.getCard.and.returnValue(of(mockCardResponse));
    spyOn(component, 'getPhotoType');
    spyOn(component, 'getNation');
    spyOn(component, 'getClub');

    component.ngOnInit();

    expect(component.getPhotoType).toHaveBeenCalled();
    expect(component.getNation).toHaveBeenCalled();
    expect(component.getClub).toHaveBeenCalled();
  });

  it('should emit InformLoading with false when getCard returns an error', () => {
    mockFutApiService.getCard.and.returnValue(throwError('Some error'));

    spyOn(component.InformLoading, 'emit');

    component.ngOnInit();

    expect(component.InformLoading.emit).toHaveBeenCalledWith(false);
  });

});
