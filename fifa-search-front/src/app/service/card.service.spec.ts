import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { TypeCard } from '../models/typeCard';
import { environment } from 'src/environments/environment.development';

describe('CardService', () => {
  let cardService: CardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardService],
    });
    cardService = TestBed.inject(CardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cardService).toBeTruthy();
  });

  it('should retrieve all version cards', () => {
    const mockVersionCards: TypeCard[] = [
      {
        fifaVersion: 'fifa-16',
        cardType: 'Rare Gold',
        photoUrl: 'https://example.com/fifa16/rare-gold.jpg',
        colorText: {
          colorOverall: 'red',
          colorFontName: 'blue',
          colorPosition: 'green',
          colorAttributes: 'orange',
        },
      },
      // Add more mock data as needed
    ];

    cardService.getAllVersionCards().subscribe((versionCards) => {
      expect(versionCards).toEqual(mockVersionCards);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/types/version`);
    expect(req.request.method).toBe('GET');
    req.flush(mockVersionCards);
  });

  it('should retrieve version cards for a specific FIFA version', () => {
    const fifaVersion = 'fifa-18';
    const mockVersionCards: TypeCard[] = [
      {
        fifaVersion: fifaVersion,
        cardType: 'Rare Gold',
        photoUrl: 'https://example.com/fifa18/rare-gold.jpg',
        colorText: {
          colorOverall: 'red',
          colorFontName: 'blue',
          colorPosition: 'green',
          colorAttributes: 'orange',
        },
      },
    ];

    cardService.getVersionCards(fifaVersion).subscribe((versionCards) => {
      expect(versionCards).toEqual(mockVersionCards);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/types/version/${fifaVersion}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockVersionCards);
  });

  it('should retrieve a specific card type for a FIFA version', () => {
    const fifaVersion = 'fifa-19';
    const cardType = 'Rare Gold';
    const mockTypeCard: TypeCard = {
      fifaVersion: fifaVersion,
      cardType: cardType,
      photoUrl: 'https://example.com/fifa19/rare-gold.jpg',
      colorText: {
        colorOverall: 'red',
        colorFontName: 'blue',
        colorPosition: 'green',
        colorAttributes: 'orange',
      },
    };

    cardService.getSpecificType(fifaVersion, cardType).subscribe((typeCard) => {
      expect(typeCard).toEqual(mockTypeCard);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/types/version/${fifaVersion}/${cardType}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTypeCard);
  });
});
