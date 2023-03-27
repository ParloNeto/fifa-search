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
  @Input() nationUrl?: string;
  @Input() clubUrl?: string;

  colorOverall: string = '#000000e6';
  colorFontName: string = '#000000e6';
  colorPosition: string = '#000000e6';
 
  public cardImage: string = '';
  
  public insertPhoto = this.details.getPhotoType;
  
  constructor( private cardService: CardService,
    private formBuilder: FormBuilder,
    private details: DetailsAddCardComponent){
     
  }
  ngOnInit(): void { }
    
  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;

  modificaEstruturaDeCores(colorAttributes: string, colorOverall?: string, colorPosition?: string, colorName?: string){
    if (colorOverall) {
      this.colorOverall = colorOverall;
    }
    if (colorPosition) {
      this.colorPosition = colorPosition;
    }
    if(colorName){
      this.colorFontName = colorName;
    }
    return colorAttributes;
  }

  changeColorText(): string {

    this.colorFontName = '#000000e6';
    this.colorOverall = '#000000e6';
    this.colorPosition = '#000000e6';
    // cartas que possuem os mesmos atributos do fifa-16 e 17.
    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-16' ||
     this.infoCardsForm?.get("versionFifa")?.value == 'fifa-17') {
      
      if (this.infoCardsForm?.get("typeCard")?.value == 'totw') {
        const color: string = 'rgb(231, 211, 115)';
        const value = this.modificaEstruturaDeCores(color, undefined, undefined, color) 
        return value ;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'tots') {
        const color: string = 'rgb(234, 211, 110)';
        const value = this.modificaEstruturaDeCores(color, color, color, undefined);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'legend') {
        const color: string = 'rgb(107, 74, 21)';
        const value = this.modificaEstruturaDeCores(color, color, color, color);
        return value;
      }

    }
    // cartas que possuem os mesmos atributos do fifa-16, 17 e 18.
    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-16' ||
     this.infoCardsForm?.get("versionFifa")?.value == 'fifa-17' || 
     this.infoCardsForm?.get("versionFifa")?.value == 'fifa-18') {

      if (this.infoCardsForm?.get("typeCard")?.value == 'record-breaker') {
        const color: string = '#fff';
        const value = this.modificaEstruturaDeCores(color, color, color, color)
        return value;
      }


    }
    //individuais por versão.
    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-16') {

      if (this.infoCardsForm?.get("typeCard")?.value == 'toty') {
        const color: string = '#fff';
        const value = this.modificaEstruturaDeCores(color, color, color, color)
        return value;
      }
    }

    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-17') {

      if (this.infoCardsForm?.get("typeCard")?.value == 'totw') {
        const color: string = 'rgb(231, 211, 115)';
        const value = this.modificaEstruturaDeCores(color, undefined, undefined, color) 
        return value ;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'hero') {
        const color: string = 'rgb(157, 121, 227)';
        const value = this.modificaEstruturaDeCores(color, undefined, undefined, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'toty') {
        const color: string = 'rgb(249, 233, 158)';
        const value = this.modificaEstruturaDeCores(color, color, color, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'saint-patricks-day'){
        const color: string = 'rgb(27, 107, 52)';
        const value = this.modificaEstruturaDeCores(color, color, color , color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'motm') {
        const color: string = '#fff';
        const colorTwo: string = 'rgb(138, 44, 0)';
        const value = this.modificaEstruturaDeCores(color, colorTwo, colorTwo, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'futties') {
        const color: string = 'rgb(229, 116, 160)';
        const value = this.modificaEstruturaDeCores(color, undefined, undefined, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'fut-champions-reward') {
        const color: string = '#fff';
        const colorTwo: string = 'rgb(132, 101, 37)';
        const value = this.modificaEstruturaDeCores(colorTwo, color, color, colorTwo);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'ones-to-watch') {
        const color: string = '#fff';
        const value = this.modificaEstruturaDeCores(color, color, color, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'ultimate-scream') {
        const color: string = 'rgb(211, 108, 18)';
        const value = this.modificaEstruturaDeCores(color, color, color, undefined);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'movember') {
        const colorAttribute: string = 'rgb(174, 165, 144)';
        const color: string = 'rgb(60, 35, 19)';
        const value = this.modificaEstruturaDeCores(colorAttribute, color, color, color);
        return value;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'sbc-reward' || this.infoCardsForm?.get("typeCard")?.value == 'premium-sbc-reward') {
        const color: string = '#fff';
        const value = this.modificaEstruturaDeCores(color, color, color, color);
        return value;
      }
    }

    if (this.infoCardsForm?.get("versionFifa")?.value == 'fifa-18') {

      if (this.infoCardsForm?.get("typeCard")?.value == 'totw') {
        const color: string = 'rgb(226, 209, 126)';
        const colorTwo: string = 'rgb(77, 54, 36)';
        const value = this.modificaEstruturaDeCores(color, colorTwo, colorTwo, color) 
        return value ;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'hero') {
        const color: string = 'rgb(212, 192, 252)';
        const colorTwo: string = 'rgb(0, 0, 0)';
        const value = this.modificaEstruturaDeCores(color, colorTwo, colorTwo, color) 
        return value ;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'toty') {
        const color: string = 'rgb(249, 233, 158)';
        const value = this.modificaEstruturaDeCores(color, color, color, color) 
        return value ;
      }

      if (this.infoCardsForm?.get("typeCard")?.value == 'saint-patricks-day') {
        const color: string = '#fff';
        const colorTwo: string = 'rgb(16, 73, 33)';
        const value = this.modificaEstruturaDeCores(color, colorTwo, colorTwo, color) 
        return value ;
      }
      
      
      

    }

    
    
    return '';
  }
}
