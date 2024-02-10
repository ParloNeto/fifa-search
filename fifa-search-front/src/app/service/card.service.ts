import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypeCard } from '../core/models/typeCard';
import { environment } from 'src/environments/environment.development';
import { typeCardsMockService } from './mocks/typeCard-mocks';
import { clubsMockService } from './mocks/club-mocks';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private $clubs = of(clubsMockService);
  private $typeCards = of(typeCardsMockService);

  private readonly apiUrl = `${environment.apiUrl}/types/version`;

  constructor(private http: HttpClient) {}

  getAllVersionCards(): Observable<TypeCard[]> {
    return this.http.get<TypeCard[]>(this.apiUrl);
  }

  getVersionCards(fifaVersion: string): Observable<TypeCard[]> {
    const url = `${this.apiUrl}/${fifaVersion}`;
    return this.http.get<TypeCard[]>(url);
  }

  getVersionCardsMock(): Observable<TypeCard[]> {
    return this.$typeCards;
  }

  getSpecificType(fifaVersion: string, cardType: string): Observable<TypeCard> {
    const url = `${this.apiUrl}/${fifaVersion}/${cardType}`;
    return this.http.get<TypeCard>(url);
  }

  getAllClubsMock(): Observable<{ club: string; }[]> {
    return this.$clubs;
  }

  cardTypeAdjustmentCss: { [key: string]: string } = {
    'fifa-16': 'card-fifa-16',
    'fifa-17': 'card-fifa-17',
    'fifa-18': 'card-fifa-18',
    'fifa-19': 'card-fifa-19',
  };
}
