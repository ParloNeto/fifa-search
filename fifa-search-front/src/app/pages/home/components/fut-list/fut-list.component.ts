import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Card } from 'src/app/core/models/card.interface';
import { FutApiService } from 'src/app/service/fut-api.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FutSearchComponent } from '../fut-search/fut-search.component';

@Component({
  selector: 'app-fut-list',
  templateUrl: './fut-list.component.html',
  styleUrls: ['./fut-list.component.scss'],
  standalone: true,
  imports: [FutSearchComponent, NgFor, RouterLink, NgIf, AsyncPipe],
})
export class FutListComponent implements OnInit {
  #futApiService = inject(FutApiService);
  private setCards = signal<Card[]>([]);
  public cards = computed(() => this.setCards());
  
  constructor() {}
  
  ngOnInit() {
    this.#futApiService.httpListCards$().subscribe({
      next: (res: Card[]) => {
        this.setCards.set(res);
      }
    });
  }

  /**
   * Filtra todas as cartas pelo nome colocado no input da Home.
   *
   * @param {string} value Nome pesquisado no input.
   * @returns {Card[]} Retorna um array filtrado com o nome passado no input.
   */

  public getSearch(value: string) {
    const filter = computed(() =>
      this.setCards().filter((res: Card) => {
        return (
          !res.firstName.toLowerCase().indexOf(value.toLowerCase()) ||
          !res.lastName.toLowerCase().indexOf(value.toLowerCase()) ||
          !res.nickName?.toLowerCase().indexOf(value.toLowerCase())
        );
      })
    );

    this.cards = filter;
  }
/**
   *
   *
   * @param {string | undefined} nation Nome do país que será pesquisado nas imagens do assets.
   * @param {string | undefined} club Nome do clube que será pesquisado nas imagens do assets.
   * @returns {string} Retorna o caminho da pasta assets com a respectiva imagem associado com o nome passado no parâmetro.
   */
  public imagePath(nation?: string, club?: string): string {
    let srcPath: string;

    if (nation) {
      srcPath = `../../../../../assets/images/nation/${nation}.png`;
    }

    if (club) {
      srcPath = `../../../../../assets/images/clubbadges/${club}.png`;
    }

    return srcPath!;
  }

  /**
   * Remove todos os hífens dos valores que vem do Back-end.
   *
   * @param {string} option Valor com hífen a ser removido.
   * @returns {string} Retorna o valor formatado sem o hífen.
   */
  public formatWithoutHyphen(option: string): string {
    const formatted = option.replace(/-/g, ' ');
    return formatted;
  }
}
