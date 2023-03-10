import { Component, Input, OnInit } from '@angular/core';
import { AttributeCard } from 'src/app/models/attributeCard';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Card } from 'src/app/models/card';

import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-details-add-card',
  templateUrl: './details-add-card.component.html',
  styleUrls: ['./details-add-card.component.scss']
})
export class DetailsAddCardComponent implements OnInit {

  cardTypeMapping = this.cardService.cardTypeMapping;

  public overallValue: string = '0';
  

  public infoCardsForm: FormGroup = this.formBuilder.group({
   
    type: ['', Validators.required],
    firstName: ['Lionel' , [Validators.required, Validators.maxLength(10)] ],
    lastName: ['Messi', [Validators.required, Validators.maxLength(10)] ],
    nickName: ['', Validators.maxLength(15)],
    nationality: ['ARGENTINA', Validators.required],
    club: ['PSG', Validators.required],
    position: ['RW', [Validators.required, Validators.maxLength(3)]],
    photo: ['https://futhead.cursecdn.com/static/img/23/players/158023.png', Validators.required],
  });

  attributeCard: FormGroup = this.formBuilder.group({
    overall: [94, Validators.maxLength(2)],
    pace: [81, Validators.maxLength(2)],
    shooting: [92, Validators.maxLength(2)],
    passing: [89, Validators.maxLength(2)],
    dribbling: [94, Validators.maxLength(2)],
    defending: [37, Validators.maxLength(2)],
    physicality: [67, Validators.maxLength(2)]
  });
  

  
  paceValue = this.infoCardsForm.get('attributeCard.pace')?.value;
  shootingValue = this.infoCardsForm.get('attributeCard.shooting')?.value;
  passingValue = this.infoCardsForm.get('attributeCard.passing')?.value;
  dribblingValue = this.infoCardsForm.get('attributeCard.dribbling')?.value;
  defendingValue = this.infoCardsForm.get('attributeCard.defending')?.value;
  physicalityValue = this.infoCardsForm.get('attributeCard.physicality')?.value;
  
  public type = Object.keys(this.cardService.cardTypeMapping);
  public club = Object.keys(this.cardService.logoMapping);
  public nationality = Object.keys(this.cardService.nationMapping);
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService
  ){}

  ngOnInit(): void {
    
  }

  formatCardType(cardType: string): string {
    const formatted = cardType.replace(/-/g, ' ').toUpperCase();
    return formatted;
  }

  public submitForm() {
    if (this.infoCardsForm.valid) {
     console.log(this.infoCardsForm.value);
       const data = Object.assign({}, this.infoCardsForm.value, { attributeCard: this.attributeCard.value });
       console.log(data);
      this.futApiService.addCard(data).subscribe(
        (card) => {
          console.log('Carta adicionada:', card);
        },
        (error) => {
          console.error('Erro ao adicionar carta:', error);
        }
      );
    }
  }
    

public updateFormGroup(attribute: string, value: string) {
  const attributeCardForm = this.infoCardsForm.get('attributeCard') as FormGroup;
  const attributeFormControl = attributeCardForm.get(attribute);
  attributeFormControl?.patchValue(value);
}


    

}
