import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { TypeCard } from 'src/app/models/typeCard';
import { NationService } from 'src/app/service/nation.service';

@Component({
  selector: 'app-details-add-card',
  templateUrl: './details-add-card.component.html',
  styleUrls: ['./details-add-card.component.scss']
})
export class DetailsAddCardComponent implements OnInit {

  photoUrl: string = '';
  nationUrl: string = '';

  public versionInstanciado: string[] = ['fifa-16', 'fifa-17', 'fifa-18', 'fifa-19'];
  public selectedTypeCard: string[] = [];


  public selectedNationCard: string[] = [];
 
  private arrayBack: TypeCard[] = [];

  public infoCardsForm: FormGroup = this.formBuilder.group({
   
    versionFifa: ['', Validators.required],
    typeCard: ['', Validators.required],
    firstName: ['Lionel' , [Validators.required, Validators.maxLength(10)] ],
    lastName: ['Messi', [Validators.required, Validators.maxLength(10)] ],
    nickName: ['', Validators.maxLength(15)],
    nationality: ['', Validators.required],
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
  
  public nation = this.selectedNationCard;
  public versionFifa = this.versionInstanciado;
  public club = Object.keys(this.cardService.logoMapping);
  public nationality = Object.keys(this.cardService.nationMapping);
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private nationService: NationService
  ){}

  ngOnInit(): void {
    this.cardService.getAllVersionCards().forEach(card => {
      this.arrayBack = card;
      console.log(this.arrayBack)
    });

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      typeCard: 'futties'
    });

    this.getAllNations();
    this.getNation();
  }

  filterTypeByVersion(): void {
    this.selectedTypeCard = [];
    const version = this.infoCardsForm.get('versionFifa')?.value;

    this.cardService.getVersionCards(version).forEach(res => {
     res.map(card => {
     this.selectedTypeCard.push(card.cardType);
     this.selectedTypeCard.sort();
      });
    });
   }

   getPhotoType(): void {
    const version = this.infoCardsForm.get('versionFifa')?.value;
    const typeCard = this.infoCardsForm.get('typeCard')?.value;

      if (version && typeCard) {
        this.cardService.getSpecificType(version, typeCard).subscribe(card => {
            this.photoUrl = card.photoUrl;
            // console.log(`o valor é:`, typeCard, version, card.photoUrl);
        });
      }
   }

     getAllNations(): void {
    this.nationService.getAllNations().forEach(res => {
      console.log(res);
     res.map(card => {
      console.log(card.nation);
      this.selectedNationCard.push(card.nation);
      this.selectedTypeCard.sort();
      console.log(this.selectedNationCard);
      });
    });
   }

   getNation(): void {
    
    console.log(this.selectedNationCard)
    
    const nation = this.infoCardsForm.get('nationality')?.value;
    this.nationService.getSpecificNation(nation).subscribe(card => {
    if (nation == card.nation) {
        this.nationUrl = card.nationUrl;
      console.log(this.nationUrl)
    } else{
      console.log('deu ruim')
    }
    
    });
   }


  onOptionSelected(): void {
    console.log('Valor selecionado:', this.infoCardsForm.get('typeCard')?.value , this.photoUrl);
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
