import { Component, OnInit } from '@angular/core';
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
  

  public infoCardsForm: FormGroup = this.formBuilder.group({
   
    cardType: ['', Validators.required],
    firstName: ['' , Validators.required],
    lastName: ['', Validators.required],
    nickName: [''],
    nationality: ['', Validators.required],
    club: ['', Validators.required],
    position: ['', Validators.required],
    photo: ['', Validators.required],
    attributeCard: this.formBuilder.group({
      overall: [null, ],
            pace: ['', Validators.required],
            shooting: ['', Validators.required],
            passing: ['', Validators.required],
            dribbling: ['', Validators.required],
            defending: ['', Validators.required],
            physicality: ['', Validators.required]
    })
  });
  // name = new FormControl('');
  public cardTypes = Object.keys(this.cardService.cardTypeMapping);
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService
  ){}


  

  ngOnInit(): void {

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

  public submitForm(){
    if(this.infoCardsForm.valid){
      console.log(this.infoCardsForm.value);
    }
      
    }

}
