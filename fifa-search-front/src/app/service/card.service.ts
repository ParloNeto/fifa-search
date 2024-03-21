import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { TypeCard } from '../core/models/typeCard.interface';
import { environment } from 'src/environments/environment.development';
import { typeCardsMockService } from './mocks/typeCard-mocks';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  #http = inject(HttpClient);
  private $typeCards = of(typeCardsMockService);
  private readonly apiUrl = `${environment.apiUrl}/types/version`;

  constructor() {}

  getAllVersionCards(): Observable<TypeCard[]> {
    return this.#http.get<TypeCard[]>(this.apiUrl);
  }

  #setTypeCards = signal<TypeCard[] | null>(null);
  /* istanbul ignore next */
  get getTypeCards() {
    return this.#setTypeCards.asReadonly();
  }

  httpTypeCardsList$(fifaVersion: string): Observable<TypeCard[]> {
    return this.#http.get<TypeCard[]>(`${this.apiUrl}/${fifaVersion}`).pipe(
      shareReplay(),
      tap((res) => this.#setTypeCards.set(res))
    );
  }

  getVersionCards(fifaVersion: string): Observable<TypeCard[]> {
    const url = `${this.apiUrl}/${fifaVersion}`;
    return this.#http.get<TypeCard[]>(url);
  }

  #setTypeCardsMock = signal<TypeCard[] | null>(null);
  /* istanbul ignore next */
  get getTypeCardsMock() {
    return this.#setTypeCardsMock.asReadonly();
  }

  getVersionCardsMock(): Observable<TypeCard[]> {
    return this.$typeCards.pipe(
      shareReplay(),
      tap((res) => this.#setTypeCardsMock.set(res))
    );
  }

  getSpecificType(fifaVersion: string, cardType: string): Observable<TypeCard> {
    const url = `${this.apiUrl}/${fifaVersion}/${cardType}`;
    return this.#http.get<TypeCard>(url);
  }
}
