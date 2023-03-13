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
  @Input() infoCardsForm?: FormGroup;
  @Input() attributeCard?: FormGroup;

  @Input() photoUrl?: string;

  colorFontWhite: string = '';
  colorOverallWhite: boolean = false;
  
  public cardImage: string = '';
  
  public insertPhoto = this.details.getPhotoType;

  public logoMapping = this.cardService.logoMapping;
  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;
  public nationMapping = this.cardService.nationMapping;
  
  constructor( private cardService: CardService,
    private formBuilder: FormBuilder,
    private details: DetailsAddCardComponent){
     
  }
  ngOnInit(): void {
    
    }

  changeColorText(): string {
    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-16') {
      if (this.infoCardsForm?.get("typeCard")?.value == 'toty' || this.infoCardsForm?.get("typeCard")?.value == 'record-breaker') {
        this.colorOverallWhite = true;
        return '#fff';
        
      }
      this.colorOverallWhite = false;
      if (this.infoCardsForm?.get("typeCard")?.value == 'totw') {
        return 'rgb(231, 211, 115)';
      }
    }
    return '';
  }

}
