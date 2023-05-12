import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';


@Component({
  selector: 'app-card-fifa-model',
  templateUrl: './card-fifa-model.component.html',
  styleUrls: ['./card-fifa-model.component.scss']
})
export class CardFifaModelComponent implements OnInit{
  @Input() infoCardsForm!: FormGroup;
  @Input() attributeCard!: FormGroup;

  @Input() photoUrl!: string;
  @Input() nationUrl!: string;
  @Input() clubUrl!: string;

  @Input() colorOverall: string = '';
  @Input() colorFontName: string = '';
  @Input() colorPosition: string = '';
  @Input() colorAttributes: string = '';
 
  public cardImage: string = '';
  

  
  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
   
    ) {}

  ngOnInit(): void {}
    
 
}
