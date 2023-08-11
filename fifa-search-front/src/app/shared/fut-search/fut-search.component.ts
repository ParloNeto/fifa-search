import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fut-search',
  templateUrl: './fut-search.component.html',
  styleUrls: ['./fut-search.component.scss']
})
export class FutSearchComponent {
  
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
