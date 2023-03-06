import { Component, Input, OnInit } from '@angular/core';
import { AttributeCard } from 'src/app/models/attributeCard';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
   
    type: ['FIFA 16', Validators.required],
    firstName: ['Messi' , Validators.required],
    lastName: ['', Validators.required],
    nickName: [''],
    nationality: ['', Validators.required],
    club: ['', Validators.required],
    position: ['', Validators.required],
    photo: ['https://futhead.cursecdn.com/static/img/23/players/158023.png', Validators.required],
  });

  attributeCard: FormGroup = this.formBuilder.group({
    overall: [94],
          pace: [81],
          shooting: [92],
          passing: [89],
          dribbling: [94],
          defending: [37],
          physicality: [67]
  })

  
  paceValue = this.infoCardsForm.get('attributeCard.pace')?.value;
  shootingValue = this.infoCardsForm.get('attributeCard.shooting')?.value;
  passingValue = this.infoCardsForm.get('attributeCard.passing')?.value;
  dribblingValue = this.infoCardsForm.get('attributeCard.dribbling')?.value;
  defendingValue = this.infoCardsForm.get('attributeCard.defending')?.value;
  physicalityValue = this.infoCardsForm.get('attributeCard.physicality')?.value;
  // name = new FormControl('');
  public type = Object.keys(this.cardService.cardTypeMapping);
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService
  ){}


  

  ngOnInit(): void {
    console.log(this.infoCardsForm.get('attributeCard.overall')?.value)

    
    // const newAttribute: AttributeCard = {
    //   overall: 90,
    //   pace: 85,
    //   shooting: 95,
    //   passing: 90,
    //   dribbling: 92,
    //   defending: 60,
    //   physicality: 80
    // };
    
    // const newCard: Card = {
    //   id: 10,
    //   type: 'fifa-22',
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   nickName: 'JD',
    //   nationality: 'United States',
    //   club: 'FC Barcelona',
    //   position: 'Forward',
    //   photo: 'https://example.com/photo.jpg',
    //   attributes: [newAttribute]
    // };
    
    
    // this.futApiService.addCard(newCard).subscribe(
    //   card => console.log(`Card added: ${card}`),
    //   error => console.log(`Error: ${error}`),
    // );
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
          console.log('Card added:', card.type);
        },
        (error) => {
          console.error('Error adding card:', error);
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
