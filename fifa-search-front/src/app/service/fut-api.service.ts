import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, of, shareReplay, tap, throwError } from 'rxjs';
import { Card } from '../core/models/card.interface';
import { environment } from 'src/environments/environment.development';
import { nationsMockService } from './mocks/nation-mocks';
import { clubsMockService } from './mocks/club-mocks';

@Injectable({
  providedIn: 'root',
})
export class FutApiService {
  #http = inject(HttpClient);

  #clubs$ = of(clubsMockService);
  #nation$ = of(nationsMockService);
  private readonly apiUrl = `${environment.apiUrl}/cards`;

  constructor() {}

  #setListCard = signal<Card[] | null>(null);
  /* istanbul ignore next */
  get getListCard() {
    return this.#setListCard.asReadonly();
  }
  #setListCardError = signal<string | null>(null);
  /* istanbul ignore next */
  get getListCardError() {
    return this.#setListCardError.asReadonly();
  }

  httpListCards$(): Observable<Card[]> {
    this.#setListCard.set(null)
    return this.#http.get<Card[]>(this.apiUrl).pipe(
      shareReplay(),
      tap((res) => this.#setListCard.set(res)),
      // catchError((error: HttpErrorResponse) => {
      //   this.#setListCardError.set(error.error.message)
      //   return throwError(() => error);
      // })
    );
  }

  #setCardId = signal<Card | null>(null);
  get getCardId() {
    return this.#setCardId.asReadonly();
  }

  httpCardId$(id: string): Observable<Card> {
    return this.#http.get<Card>(`${this.apiUrl}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setCardId.set(res)),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  httpCardCreate$(card: Card): Observable<Card> {
    return this.#http.post<Card>(this.apiUrl, card).pipe(shareReplay());
  }

  httpDeleteCardById(id: string): Observable<void> {
    return this.#http.delete<void>(`${this.apiUrl}/${id}`, {}).pipe(shareReplay());
  }

  #setClubs = signal<{ club: string }[] | null>(null);
  get getClubs() {
    return this.#setClubs.asReadonly();
  }

  getAllClubsMock(): Observable<{ club: string }[]> {
    return this.#clubs$.pipe(
      shareReplay(),
      tap((res) => this.#setClubs.set(res))
    );
  }

  #setNations = signal<{ nation: string }[] | null>(null);
  get getNations() {
    return this.#setNations.asReadonly();
  }

  getAllNationsMock(): Observable<{ nation: string }[]> {
    return this.#nation$.pipe(
      shareReplay(),
      tap((res) => this.#setNations.set(res))
    );
  }
}
