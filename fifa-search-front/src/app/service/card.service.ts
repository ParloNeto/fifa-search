import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public cardTypeMapping: { [key: string]: { gold:string, silver: string, bronze: string } } = {
    'fifa-16': { gold: 'assets/images/cards/card-fifa-16.png', silver: 'assets/images/cards/card-silver-fifa-16.png', bronze: 'assets/images/cards/card-bronze-fifa-16.png' },
    'fifa-17': { gold: 'assets/images/cards/card-fifa-17.png', silver: 'assets/images/cards/card-silver-fifa-17.png', bronze: 'assets/images/cards/card-bronze-fifa-16.png'},
    'fifa-18': { gold: 'assets/images/cards/card-fifa-18.png', silver: 'assets/images/cards/card-fifa-18.png',  bronze: 'assets/images/cards/card-bronze-fifa-16.png'},
    'fifa-19': { gold: 'assets/images/cards/card-fifa-19.png', silver: 'assets/images/cards/card-fifa-19.png',  bronze: 'assets/images/cards/card-bronze-fifa-16.png'}
}

  constructor() { }
}
