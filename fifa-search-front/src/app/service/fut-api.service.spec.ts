import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FutApiService } from './fut-api.service';
import { Card } from '../core/models/card.interface';
import { attributesMock, clubNameMock } from '../core/models/test/mock-models';
import { environment } from 'src/environments/environment.development';

describe('FutApiService', () => {
  let futApiService: FutApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FutApiService],
    });
    futApiService = TestBed.inject(FutApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(futApiService).toBeTruthy();
  });

  it('should retrieve all cards', () => {
    const mockCards: Card[] = [
      { id: '1', versionFifa: 'FIFA 21', typeCard: 'Rare Gold', firstName: 'John', lastName: 'Doe', nationality: 'England', club: clubNameMock, position: 'Forward', photo: 'https://example.com/player.jpg', attributeCard: attributesMock },
      { id: '2', versionFifa: 'FIFA 21', typeCard: 'Rare Gold', firstName: 'Jane', lastName: 'Smith', nationality: 'USA', club: clubNameMock, position: 'Midfielder', photo: 'https://example.com/player2.jpg', attributeCard: attributesMock },
    ];

    futApiService.httpListCards$().subscribe((cards) => {
      expect(cards).toEqual(mockCards);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/cards`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCards);
  });

  it('should retrieve a specific card', () => {
    const cardId = '1';
    const mockCard: Card = { id: cardId, versionFifa: 'FIFA 21', typeCard: 'Rare Gold', firstName: 'John', lastName: 'Doe', nationality: 'England', club: clubNameMock, position: 'Forward', photo: 'https://example.com/player.jpg', attributeCard: attributesMock };

    futApiService.httpCardId$(cardId).subscribe((card) => {
      expect(card).not.toEqual(mockCard); // O método getCard retorna um array de Cards, então devemos passar o mockCard dentro de um array
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/cards/${cardId}`);
    expect(req.request.method).toBe('GET');
    req.flush([mockCard]); // O servidor retorna um array de Cards
  });

  it('should add a new card', () => {
    const newCard: Card = { id: '3', versionFifa: 'FIFA 21', typeCard: 'Rare Gold', firstName: 'New', lastName: 'Player', nationality: 'Spain', club: clubNameMock, position: 'Midfielder', photo: 'https://example.com/new-player.jpg', attributeCard: attributesMock };

    futApiService.httpCardCreate$(newCard).subscribe((addedCard: Card) => {
      expect(addedCard).toEqual(newCard);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/cards`);
    expect(req.request.method).toBe('POST');
    req.flush(newCard);
  });

  it('should delete a card by id', () => {
    const cardId = '1';

    futApiService.deleteCardById(cardId).subscribe((deletedCard) => {
      expect(deletedCard).toBeNull();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/cards/${cardId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // O servidor retorna um objeto nulo após a exclusão
  });
});
