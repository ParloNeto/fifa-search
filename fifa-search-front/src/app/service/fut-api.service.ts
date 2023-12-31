import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../core/models/card';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FutApiService {

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
}
