import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { FutApiService } from 'src/app/service/fut-api.service';
import { NationService } from 'src/app/service/nation.service';

@Component({
  selector: 'app-fut-list',
  templateUrl: './fut-list.component.html',
  styleUrls: ['./fut-list.component.scss'],
})
export class FutListComponent implements OnInit {

  private setCards: Card[] = [];
  public cards: Card[] = [];
  public nationUrl: { [ nationName: string ]: string } = {};
  public apiError: boolean = false;

  constructor(
    private futApiService: FutApiService,
    private nationService: NationService
  ) {}
  ngOnInit() {
    this.getAllCards();
    this.getAllNations();
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
      error: () => this.apiError = true
    });
  }

  public getAllNations() {
    this.nationService.getAllNations().subscribe({
      next: (nations) => {
        nations.forEach(nation => {
          this.nationUrl[nation.nation] = nation.nationUrl;
        });
      }
    });
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
