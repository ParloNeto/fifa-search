import { HttpClient } from '@angular/common/http';
import { Attribute, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class FutApiService {

  private apiUrl = '/cards';

  constructor(
    private http: HttpClient
  ) { }


  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  getCard(url: string): Observable<Card[]> {
    return this.http.get<Card[]>(url);
}

public addCard(card: Card): Observable<Card> {
  return this.http.post<Card>(this.apiUrl, card).pipe(
    tap(() => console.log(`Card added: ${card}`)),
  );
}
// getCardAttributes(card: Card): Attribute[] {
//   return card.attributes;
// }

  // get apiListAllCards(): Observable<Card>{
  //   return this.http.get<Card>(this.apiUrl).pipe(
  //     tap(res => res),
  //     tap(res => {
  //       res.attributes.map((resAttributes: Attribute) => {

  //       })
  //     })
  //   )
  // }
}
