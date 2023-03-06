import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-attributes-details-add-card',
  templateUrl: './attributes-details-add-card.component.html',
  styleUrls: ['./attributes-details-add-card.component.scss']
})
export class AttributesDetailsAddCardComponent implements OnInit{
  @Input() infoCardsForm?: FormGroup;
  @Input() attributeCard?: FormGroup;
  
  public cardImage: string = '';
  
  public cardTypeMapping = this.cardService.cardTypeMapping;
  public logoMapping = this.cardService.logoMapping;
  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;
  public nationMapping = this.cardService.nationMapping;
  
  


  constructor( private cardService: CardService,
    private formBuilder: FormBuilder,){
   
  }
  ngOnInit(): void {
    
    

    this.infoCardsForm?.get('type')?.valueChanges.subscribe(type => {
      
      if (type) {
        const cardMapping = this.cardTypeMapping[type];

        if (cardMapping) {
          this.cardImage = cardMapping.gold; // ou qualquer tipo que desejar
        }
      }
    });
  }
}
