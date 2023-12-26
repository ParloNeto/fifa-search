import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeCard } from '../models/typeCard';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly apiUrl = `${environment.apiUrl}/types/version`;

  constructor(private http: HttpClient) {}

  getAllVersionCards(): Observable<TypeCard[]> {
    return this.http.get<TypeCard[]>(this.apiUrl);
  }

  getVersionCards(fifaVersion: string): Observable<TypeCard[]> {
    const url = `${this.apiUrl}/${fifaVersion}`;
    return this.http.get<TypeCard[]>(url);
  }

  getSpecificType(fifaVersion: string, cardType: string): Observable<TypeCard> {
    const url = `${this.apiUrl}/${fifaVersion}/${cardType}`;
    return this.http.get<TypeCard>(url);
  }

  cardTypeAdjustmentCss: { [key: string]: string } = {
    'fifa-16': 'card-fifa-16',
    'fifa-17': 'card-fifa-17',
    'fifa-18': 'card-fifa-18',
    'fifa-19': 'card-fifa-19',
  };
}
