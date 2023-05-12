import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() attributeCard!: FormGroup;
  @Output() sendInfoCard = new EventEmitter<FormGroup>();

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

  public infoCardsForm: FormGroup; 

  
  
  constructor(
    private futApiService: FutApiService,
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
     this.infoCardsForm = this.formBuilder.group({
   
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

    this.infoCardsForm.valueChanges.subscribe((form) => {
      this.sendInfoCard.emit(this.infoCardsForm);
      });
    }

  ngOnInit(): void {
    this.sendInfoCard.emit(this.infoCardsForm);

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      typeCard: 'futties'
    });

    this.getAllNations();
    this.getAllClubs();
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
      const data = Object.assign({}, this.infoCardsForm.value, { attributeCard: this.attributeCard.value });
      this.futApiService.addCard(data).subscribe({
        next: () => {
          this.router.navigateByUrl('');
          this.snackBar.open('Jogador adicionado com sucesso!', 'Fechar', {
            duration: 3000
          });
        },
        error: (error: Error) => console.error('Erro ao adicionar carta de jogador:', error)
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

  public getAllNations(): void {
    this.nationService.getAllNations().forEach(res => {
     res.map(card => {
      this.selectedNationCard.push(card.nation);
      this.selectedNationCard.sort();
      });
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

}
