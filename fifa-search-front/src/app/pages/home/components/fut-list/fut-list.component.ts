import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.interface';
import { FutApiService } from 'src/app/service/fut-api.service';

@Component({
  selector: 'app-fut-list',
  templateUrl: './fut-list.component.html',
  styleUrls: ['./fut-list.component.scss'],
})
export class FutListComponent implements OnInit {
  private setCards: Card[] = [];
  public cards: Card[] = [];
  public nationUrl: { [nationName: string]: string } = {};
  public apiError: boolean = false;

  constructor(
    private futApiService: FutApiService
  ){}
  ngOnInit() {
    this.getAllCards();
  }

  

  /**
   * Filtra todas as cartas pelo nome colocado no input da Home.
   *
   * @param {string} value - Nome pesquisado no input.
   * @returns {Card[]} - Retorna um array filtrado com o nome passado no input.
   */
  public getSearch(value: string) {
    const filter = this.setCards.filter((res: Card) => {
      return (
        !res.firstName.toLowerCase().indexOf(value.toLowerCase()) ||
        !res.lastName.toLowerCase().indexOf(value.toLowerCase())
      );
    });

    this.cards = filter;
  }

  public getAllCards() {
    this.futApiService.getAllCards().subscribe({
      next: (res) => {
        this.setCards = res;
        this.cards = this.setCards;
      },
      error: () => (this.apiError = true),
    });
  }

  public imagePath(nation?: string, club?: string): string {
    let srcPath: string;

    if(nation) {
      srcPath = `../../../../../assets/images/nation/${nation}.png`
      console.log(srcPath)
    }

    if(club) {
      srcPath = `../../../../../assets/images/clubbadges/${club}.png`
    }

    return srcPath!;
  }

  /**
   * Remove todos os hífens dos valores que vem do Back-end.
   *
   * @param {string} option - Valor com hífen a ser removido.
   * @returns {string} - Retorna o valor formatado sem o hífen.
   */
  public formatWithoutHyphen(option: string): string {
    const formatted = option.replace(/-/g, ' ');
    return formatted;
  }
}
