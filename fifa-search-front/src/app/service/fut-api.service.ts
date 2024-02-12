import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../core/models/card.interface';
import { environment } from 'src/environments/environment.development';
import { nationsMockService } from './mocks/nation-mocks';
import { clubsMockService } from './mocks/club-mocks';

@Injectable({
  providedIn: 'root',
})
export class FutApiService {
  #$clubs = of(clubsMockService);
  #$nation = of(nationsMockService);
  private readonly apiUrl = `${environment.apiUrl}/cards`;

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  getCard(url: string): Observable<Card> {
    const url2 = `${this.apiUrl}/${url}`;
    return this.http.get<Card>(url2);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  deleteCardById(id: string): Observable<Card> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Card>(url);
  }

  getAllClubsMock(): Observable<{ club: string }[]> {
    return this.#$clubs;
  }

  getAllNationsMock(): Observable<{ nation: string }[]> {
    return this.#$nation;
  }
}
