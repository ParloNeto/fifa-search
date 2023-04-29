import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { DetailsAddCardComponent } from '../details-add-card.component';

@Component({
  selector: 'app-attributes-details-add-card',
  templateUrl: './attributes-details-add-card.component.html',
  styleUrls: ['./attributes-details-add-card.component.scss']
})
export class AttributesDetailsAddCardComponent implements OnInit{
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
  
  public insertPhoto = this.details.getPhotoType;
  
  constructor( private cardService: CardService,
    private formBuilder: FormBuilder,
    private details: DetailsAddCardComponent){
     
  }
  ngOnInit(): void { }
    
  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;

}
