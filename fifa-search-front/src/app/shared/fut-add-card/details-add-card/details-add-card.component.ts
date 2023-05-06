import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { NationService } from 'src/app/service/nation.service';
import { ClubService } from 'src/app/service/club.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-add-card',
  templateUrl: './details-add-card.component.html',
  styleUrls: ['./details-add-card.component.scss']
})
export class DetailsAddCardComponent implements OnInit {

  public photoUrl: string = '';
  public nationUrl: string = '';
  public clubUrl: string = '';

  public colorOverall: string = '';
  public colorFontName: string = '';
  public colorPosition: string = '';
  public colorAttributes: string = '';

  public versionInstanciado: ReadonlyArray<string> = ['fifa-16', 'fifa-17', 'fifa-18', 'fifa-19', 'fifa-20'];
  public selectedTypeCard: string[] = [];
  public selectedNationCard: string[] = [];
  public selectedClubCard: string[] = [];

  public infoCardsForm: FormGroup = this.formBuilder.group({
   
    versionFifa: ['', Validators.required],
    typeCard: ['', Validators.required],
    firstName: ['Lionel' , [Validators.required, Validators.maxLength(10)] ],
    lastName: ['Messi', [Validators.required, Validators.maxLength(10)] ],
    nickName: ['', Validators.maxLength(15)],
    nationality: ['', Validators.required],
    club: ['palmeiras', Validators.required],
    position: ['RW', [Validators.required, Validators.maxLength(3)]],
    photo: ['https://futhead.cursecdn.com/static/img/23/players/158023.png', Validators.required],
  });

  attributeCard: FormGroup = this.formBuilder.group({
    overall: [94, [Validators.maxLength(2), Validators.required]],
    pace: [81, [Validators.maxLength(2), Validators.required]],
    shooting: [92, [Validators.maxLength(2), Validators.required]],
    passing: [89, [Validators.maxLength(2), Validators.required]],
    dribbling: [94, [Validators.maxLength(2), Validators.required]],
    defending: [37, [Validators.maxLength(2), Validators.required]],
    physicality: [67, [Validators.maxLength(2), Validators.required]]
  });
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      typeCard: 'futties'
    });

    this.getAllNations();
    this.getNation();

    this.getAllClubs();
    this.getClub();
  }

  public formatUpperCase(option: string): string {
    const formatted = option.replace(/-/g, ' ').toUpperCase();
    return formatted;
  }

  public formatWithoutHyphen(option: string): string {
    const formatted = option.replace(/-/g, ' ');
    return formatted;
  }

  public submitForm() {
    if (this.infoCardsForm.valid) {
     console.log(this.infoCardsForm.value);
       const data = Object.assign({}, this.infoCardsForm.value, { attributeCard: this.attributeCard.value });
       console.log(data);
      this.futApiService.addCard(data).subscribe({
        next: () => {
          this.router.navigateByUrl('');
          this.snackBar.open('Jogador adicionado com sucesso!', 'Fechar', {
            duration: 3000
          });
        },
        error: (error: Error) => {
          console.error('Erro ao adicionar carta de jogador:', error);
        }
      });
    }
  }

  public filterTypeByVersion(): void {
    this.selectedTypeCard = [];
    const version = this.infoCardsForm.get('versionFifa')!.value;

    this.cardService.getVersionCards(version).forEach(res => {
     res.map(card => {
     this.selectedTypeCard.push(card.cardType);
     this.selectedTypeCard.sort();
      });
    });
   }

   public getTypesColor(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;
    const typeCard = this.infoCardsForm.get('typeCard')!.value;

      if (version && typeCard) {
        this.cardService.getSpecificType(version, typeCard).subscribe(card => {
          this.colorOverall = card.colorText.colorOverall;
          this.colorFontName = card.colorText.colorFontName;
          this.colorAttributes = card.colorText.colorAttributes;
          this.colorPosition = card.colorText.colorPosition;
        });
      }
  }

  public getPhotoType(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;
    const typeCard = this.infoCardsForm.get('typeCard')!.value;

      if (version && typeCard) {
        this.cardService.getSpecificType(version, typeCard).subscribe(card => {
            this.photoUrl = card.photoUrl;
            this.getTypesColor();
        });
      }
  }

  public getAllNations(): void {
    this.nationService.getAllNations().forEach(res => {
     res.map(card => {
      this.selectedNationCard.push(card.nation);
      this.selectedNationCard.sort();
      });
    });
  }

  public getNation(): void { 
    const nation = this.infoCardsForm.get('nationality')!.value;
    this.nationService.getSpecificNation(nation).subscribe(card => {
      if (nation == card.nation) this.nationUrl = card.nationUrl;
    });
  }

  public getAllClubs(): void {
    this.clubService.getAllClubs().forEach(res => {
     res.map(card => {
      this.selectedClubCard.push(card.club);
      this.selectedClubCard.sort();
      });
    });
  }

  public getClub(): void { 
    const club = this.infoCardsForm.get('club')!.value;
    this.clubService.getSpecificClub(club).subscribe(card => {
      if (club == card.club) this.clubUrl = card.clubUrl;
    });
  }
}
