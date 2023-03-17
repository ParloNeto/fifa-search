import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nation } from '../models/nation';
import { TypeCard } from '../models/typeCard';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  private apiUrl = '/nations';

  getAllNations(): Observable<Nation[]> {
    return this.http.get<Nation[]>(this.apiUrl);
  }

  getSpecificNation(nation: string): Observable<Nation> {
    const url = `${this.apiUrl}/${nation}`;
    return this.http.get<Nation>(url);
  }
  

  public cardTypeMapping: { [key: string]: { gold:string, silver: string, bronze: string } } = {
    'fifa-16': { gold: 'assets/images/cards/card-fifa-16.png', silver: 'assets/images/cards/card-silver-fifa-16.png', bronze: 'assets/images/cards/card-bronze-fifa-16.png' },
    'fifa-17': { gold: 'assets/images/cards/card-fifa-17.png', silver: 'assets/images/cards/card-silver-fifa-17.png', bronze: 'assets/images/cards/card-bronze-fifa-16.png'},
    'fifa-18': { gold: 'assets/images/cards/card-fifa-18.png', silver: 'assets/images/cards/card-fifa-18.png',  bronze: 'assets/images/cards/card-bronze-fifa-16.png'},
    'fifa-19': { gold: 'assets/images/cards/card-fifa-19.png', silver: 'assets/images/cards/card-fifa-19.png',  bronze: 'assets/images/cards/card-bronze-fifa-16.png'}
}

public logoMapping: { [key: string]: string } = {
  'psg': 'assets/images/clubs/psg-logo.png',
  'palmeiras': 'https://futhead.cursecdn.com/static/img/16/clubs/383.png',
  // 'barcelona': 'https://www.example.com/logo-barcelona.png',
  // 'real_madrid': 'https://www.example.com/logo-real-madrid.png'
};

public nationMapping: { [key: string]: string } = {
  'brazil': 'assets/images/nation/brazil.png',
  'argentina': 'assets/images/nation/argentina.png',
  'france': 'assets/images/nation/france.png',
};

public cardTypeAdjustmentCss: { [key: string]: string } = {
  'fifa-16': 'card-fifa-16',
  'fifa-17': 'card-fifa-17',
  'fifa-18': 'card-fifa-18',
  'fifa-19': 'card-fifa-19',
};


  constructor(private http: HttpClient) { }
}