import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CardDetailsComponent } from './card-details.component';
import { CardService } from 'src/app/service/card.service';
import { FutApiService } from 'src/app/service/fut-api.service';
import { Card } from 'src/app/core/models/card.interface';
import {
  cardMock,
  clubNameMock,
  mockTypeCard,
} from 'src/app/core/models/test/mock-models';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;
  let futApiService: FutApiService;
  let cardService: jasmine.SpyObj<CardService>;
  const mockCardData: Card = cardMock;

  beforeEach(waitForAsync(() => {
    cardService = jasmine.createSpyObj('CardService', ['getSpecificType', 'cardTypeAdjustmentCss']);
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        FutApiService,
        { provide: CardService, useValue: cardService }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    futApiService = TestBed.inject(FutApiService);
    cardService.getSpecificType.and.returnValue(of(mockTypeCard));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('httpCardId$ should return stubbed value from a spy', () => {
    spyOn(futApiService, 'httpCardId$').and.returnValue(of(mockCardData));
    futApiService.httpCardId$(mockCardData.id);
    spyOn(component, 'getPhotoType').and.returnValue();
    spyOn(component.InformLoading, 'emit');
    spyOn(component.dataCard, 'emit');
    spyOn(component.informId, 'emit').and.returnValue();

    component.ngOnInit();

    expect(component.card).toEqual(mockCardData);
    expect(component.getPhotoType).toHaveBeenCalled();
    expect(component.dataCard.emit).toHaveBeenCalledWith(mockCardData);
    expect(component.InformLoading.emit).toHaveBeenCalledWith(true);
    expect(component.informId.emit).toHaveBeenCalledWith(mockCardData.id);
    expect(futApiService.httpCardId$).toHaveBeenCalledWith(cardMock.id);
  });

  it('should emit InformLoading with false when httpCardId$ returns an error', () => {
    spyOn(futApiService, 'httpCardId$').and.returnValue(throwError('Fake error'));
  
    spyOn(component.InformLoading, 'emit');
  
    component.ngOnInit();
  
    expect(futApiService.httpCardId$).toHaveBeenCalled();
    expect(component.InformLoading.emit).toHaveBeenCalledWith(false);
  });

  it('should set properties from getSpecificType response', () => {
    const mockSpecificTypeResponse = mockTypeCard;
  
    component.card = mockCardData;
    component.getPhotoType();
  
    expect(component.photoUrl).toBe(mockSpecificTypeResponse.photoUrl);
    expect(component.colorFontName).toBe(mockSpecificTypeResponse.colorText.colorFontName);
    expect(component.colorOverall).toBe(mockSpecificTypeResponse.colorText.colorOverall);
    expect(component.colorPosition).toBe(mockSpecificTypeResponse.colorText.colorPosition);
    expect(component.colorAttributes).toBe(mockSpecificTypeResponse.colorText.colorAttributes);
  });
});
