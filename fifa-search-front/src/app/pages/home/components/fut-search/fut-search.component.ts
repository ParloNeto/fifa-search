import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-fut-search',
    templateUrl: './fut-search.component.html',
    styleUrls: ['./fut-search.component.scss'],
    standalone: true
})
export class FutSearchComponent {
  
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
/**
   * Filtra todas as cartas pelo nome colocado no input da Home.
   *
   * @param {string} value Valor passado no input.
   * @returns {EventEmitter<string>} Emite o valor do input para o componente de listagem de cartas
   */

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
