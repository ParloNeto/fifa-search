import { HttpClient } from '@angular/common/http';
import { Attribute, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class FutApiService {

  private readonly apiUrl = '/cards';

  constructor(
    private http: HttpClient
  ) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  getCard(url: string): Observable<Card[]> {
    return this.http.get<Card[]>(url);
  }

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  deleteCardById(id: string): Observable<Card> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Card>(url);
  }
}
