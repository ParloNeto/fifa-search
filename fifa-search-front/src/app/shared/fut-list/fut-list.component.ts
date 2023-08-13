import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Nation } from 'src/app/models/nation';
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

  public getAllNations() {
    this.nationService.getAllNations().subscribe({
      next: (nations) => {
        nations.forEach(nation => {
          this.nationUrl[nation.nation] = nation.nationUrl;
        });
      }
    });
  }

  public formatUpperCase(option: string): string {
    const formatted = option.replace(/-/g, ' ').toUpperCase();
    return formatted;
  }

  public formatWithoutHyphen(option: string): string {
    const formatted = option.replace(/-/g, ' ');
    return formatted;
  }
}
