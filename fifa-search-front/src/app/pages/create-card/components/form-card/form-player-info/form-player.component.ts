import { environment } from './../../../../../../environments/environment.development';
import { ColorText } from './../../../../../core/models/colorText';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { NationService } from 'src/app/service/nation.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nation } from 'src/app/core/models/nation';
import { TypeCard } from 'src/app/core/models/typeCard';
import {
  FIFA_16,
  FIFA_17,
  FIFA_18,
  FIFA_19,
} from 'src/app/service/mocks/utils';
import { EMPTY, Observable, Subscription, catchError, take } from 'rxjs';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss'],
})
export class FormPlayerComponent implements OnInit {
  #fb = inject(FormBuilder);

  @Input() attributeCard!: FormGroup;
  @Output() sendInfoCard = new EventEmitter<FormGroup>();
  @Output() sendColorText = new EventEmitter<ColorText>();

  public versionInstanciado: ReadonlyArray<string> = [
    'fifa-16',
    'fifa-17',
    'fifa-18',
    'fifa-19',
    'fifa-20',
  ];
  public selectedTypeCard: string[] = [];
  public selectedNationCard: string[] = [];
  public selectedClubCard: string[] = [];
  public colorTextCard!: ColorText;

  public infoCardsForm: FormGroup;
  isMocked: boolean = environment.isMocked;

  constructor(
    private futApiService: FutApiService,
    private cardService: CardService,
    private nationService: NationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.infoCardsForm = this.#fb.group({
      versionFifa: ['', Validators.required],
      typeCard: ['', [Validators.required, Validators.maxLength(50)]],
      firstName: ['Lionel', [Validators.required, Validators.maxLength(20)]],
      lastName: ['Messi', [Validators.required, Validators.maxLength(20)]],
      nickName: ['', Validators.maxLength(30)],
      nationality: ['', Validators.required],
      club: ['', Validators.required],
      position: ['RW', [Validators.required, Validators.maxLength(3)]],
      photo: [
        'https://futhead.cursecdn.com/static/img/23/players/158023.png',
        Validators.required,
      ],
    });

    this.infoCardsForm.valueChanges.subscribe(() => {
      this.emitsFormValue();
      this.executeBasedOnMockStatus();
    });
  }

  ngOnInit(): void {
    this.emitsFormValue();
    this.getAllClubs();

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      club: 'arsenal',
    });

    this.getAllNations();
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
      const data = Object.assign({}, this.infoCardsForm.value, {
        attributeCard: this.attributeCard.value,
      });
      this.futApiService.createCard(data).subscribe({
        next: () => {
          this.router.navigateByUrl('');
          this.snackBar.open('Jogador adicionado com sucesso!', 'Fechar', {
            duration: 3000,
          });
        },
        error: (error: Error) =>
          console.error('Erro ao adicionar carta de jogador:', error),
      });
    }
  }

  public filterTypeByVersion(): void {
    this.selectedTypeCard = [];
    const version = this.infoCardsForm.get('versionFifa')!.value;

    this.cardService.getVersionCards(version).subscribe({
      next: (res: TypeCard[]) => {
        if (res.length === 0) {
          this.getAllTypeCardsMock(version);
        }
        res.forEach((typeCard) => {
          this.addItemsInSelectArray(this.selectedTypeCard, typeCard.cardType);
        });
      },
    });
  }

  private getAllTypeCardsMock(version: string): void {
    this.selectedTypeCard = [];
      this.cardService.getVersionCardsMock().subscribe({
        next: (types) => {
          const filteredTypesByVersion = types.filter((res) => res.fifaVersion === version);

          filteredTypesByVersion.forEach((res) => {
            this.addItemsInSelectArray(this.selectedTypeCard, res.cardType);
          });
        },
      });
    
  }

  getAllTypeCardMock(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;
    return this.getAllTypeCardsMock(version);
  }

  public getAllNations(): void {
    this.nationService.getAllNations().subscribe({
      next: (res: Nation[]) => {
        if (res.length === 0) {
          this.getAllNationsMock();
        }
        res.forEach((card) => {
          this.addItemsInSelectArray(this.selectedNationCard, card.nation);
        });
      },
      error: () => {
        console.error('Iniciando dados de nacionalidade mockados.');
        this.getAllNationsMock();
      },
    });
  }

  private getAllNationsMock(): void {
    this.nationService.getAllNationsMock().forEach((card) => {
      this.addItemsInSelectArray(this.selectedNationCard, card.nation);
    });
  }

  public getAllClubs(): void {
    this.getAllClubsMock();
  }

  private getAllClubsMock(): void {
    this.cardService.getAllClubsMock().subscribe({
      next: (clubs: { club: string }[]) => {
        clubs.forEach((res) => {
          this.addItemsInSelectArray(this.selectedClubCard, res.club);
        });
      },
    });
  }

  public executeBasedOnMockStatus(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;

    if (environment.isMocked === true) {
      this.getTypesColorMock();
      this.getAllTypeCardsMock(version);
    }
    return this.getTypesColor();
  }

  public getTypesColor(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;
    const typeCard = this.infoCardsForm.get('typeCard')!.value;

    if (version && typeCard) {
      this.cardService.getSpecificType(version, typeCard).subscribe({
        next: (card) => {
          let obj: ColorText = {
            colorAttributes: card.colorText.colorAttributes,
            colorFontName: card.colorText.colorFontName,
            colorPosition: card.colorText.colorPosition,
            colorOverall: card.colorText.colorOverall,
          };

          this.colorTextCard = obj;
          this.sendColorText.emit(this.colorTextCard);
        },
      });
    }
  }

  getTypesColorMock(): void {
    const version = this.infoCardsForm.get('versionFifa')!.value;
    const typeCard = this.infoCardsForm.get('typeCard')!.value;
    this.cardService.getVersionCardsMock().subscribe({
      next: (types) => {
        types.forEach((res) => {
          if (version === res.fifaVersion && typeCard === res.cardType) {
            let obj: ColorText = {
              colorAttributes: res.colorText.colorAttributes,
              colorFontName: res.colorText.colorFontName,
              colorPosition: res.colorText.colorPosition,
              colorOverall: res.colorText.colorOverall,
            };
            this.colorTextCard = obj;
            this.sendColorText.emit(this.colorTextCard);
          }
        });
      },
    });
  }

  public addItemsInSelectArray(arraySelect: string[], item: string): string[] {
    arraySelect.push(item);
    return arraySelect.sort((a, b) => a.localeCompare(b));
  }

  public emitsFormValue(): void {
    return this.sendInfoCard.emit(this.infoCardsForm);
  }
}
