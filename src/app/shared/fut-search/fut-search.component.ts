import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fut-search',
  templateUrl: './fut-search.component.html',
  styleUrls: ['./fut-search.component.scss']
})
export class FutSearchComponent implements OnInit{
  
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
