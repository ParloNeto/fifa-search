import { environment } from './../../../../../../environments/environment.development';
import { ColorText } from '../../../../../core/models/colorText.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TypeCard } from 'src/app/core/models/typeCard.interface';
import {
  FIFA_16,
  FIFA_17,
  FIFA_18,
  FIFA_19,
  FIFA_20,
} from 'src/app/service/mocks/utils';
import { UpperCaseDirective } from '../../../../../shared/directives/upper-case.directive';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-form-player',
    templateUrl: './form-player.component.html',
    styleUrls: ['./form-player.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgFor,
        NgClass,
        UpperCaseDirective,
    ],
})
export class FormPlayerComponent implements OnInit {
  #fb = inject(FormBuilder);

  @Input() attributeCard!: FormGroup;
  @Output() sendInfoCard = new EventEmitter<FormGroup>();
  @Output() sendColorText = new EventEmitter<ColorText>();

  public versionInstanciado: ReadonlyArray<string> = [
    FIFA_16,
    FIFA_17,
    FIFA_18,
    FIFA_19,
    FIFA_20,
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
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    console.log(this.isMocked);
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

  get position() {
    return this.infoCardsForm.get('position');
  }
  get versionFifa() {
    return this.infoCardsForm.get('versionFifa');
  }
  get firstName() {
    return this.infoCardsForm.get('firstName');
  }
  get lastName() {
    return this.infoCardsForm.get('lastName');
  }
  get nickName() {
    return this.infoCardsForm.get('nickName');
  }
  get typeCard() {
    return this.infoCardsForm.get('typeCard');
  }
  get nationality() {
    return this.infoCardsForm.get('nationality');
  }
  get club() {
    return this.infoCardsForm.get('club');
  }
  get photo() {
    return this.infoCardsForm.get('photo');
  }

  checkValidateAttributes(
    campoInput: AbstractControl<string, string> | null
  ): string | undefined {
    if (campoInput?.invalid && (campoInput?.dirty || campoInput?.touched))
      return 'input-error';

    return;
  }

  ngOnInit(): void {
    this.emitsFormValue();
    this.getAllNationsMock();
    this.getAllClubsMock();
    console.log(this.isMocked);

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      club: 'arsenal',
    });
  }

  public formatUpperCase(option: string): string {
    const formatted = option.replace(/-/g, ' ').toUpperCase();
    return formatted;
  }

  public formatWithoutHyphen(option: string): string {
    const formatted = option.replace(/-/g, ' ');
    return formatted;
  }

  public submitForm(): boolean {
    let isDisabled: boolean = true;
    if (this.infoCardsForm.invalid) return isDisabled;
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
          this.snackBar.open(
            'Não foi possível adicionar esse jogador. Tente novamente mais tarde.',
            'Fechar',
            {
              duration: 3000,
            }
          ),
      });
      return !isDisabled;
    }
    return !isDisabled;
  }

  public filterTypeByVersion(): void {
    this.selectedTypeCard = [];

    if (this.isMocked === true)
      this.getAllTypeCardsMock(this.versionFifa!.value);
    if (this.isMocked === false) this.getAllTypeCards(this.versionFifa!.value);
  }

  private getAllTypeCardsMock(version: string): void {
    this.selectedTypeCard = [];
    this.cardService.getVersionCardsMock().subscribe({
      next: (types) => {
        const filteredTypesByVersion = types.filter(
          (res) => res.fifaVersion === version
        );

        filteredTypesByVersion.forEach((res) => {
          this.addItemsInSelectArray(this.selectedTypeCard, res.cardType);
        });
      },
    });
  }

  public getAllTypeCards(version: string): void {
    this.selectedTypeCard = [];

    this.cardService.getVersionCards(version).forEach((res) => {
      res.forEach((card) => {
        this.addItemsInSelectArray(this.selectedTypeCard, card.cardType);
      });
    });
  }

  getAllTypeCardMockInSelect(): void {
    if (this.isMocked === true)
      this.getAllTypeCardsMock(this.versionFifa!.value);
    if (this.isMocked === false) this.getAllTypeCards(this.versionFifa!.value);
  }

  private getAllNationsMock(): void {
    this.futApiService.getAllNationsMock().subscribe({
      next: (nations: { nation: string }[]) => {
        nations.forEach((res) => {
          this.addItemsInSelectArray(this.selectedNationCard, res.nation);
        });
      },
    });
  }

  private getAllClubsMock(): void {
    this.futApiService.getAllClubsMock().subscribe({
      next: (clubs: { club: string }[]) => {
        clubs.forEach((res) => {
          this.addItemsInSelectArray(this.selectedClubCard, res.club);
        });
      },
    });
  }

  public executeBasedOnMockStatus(): void {
    if (environment.isMocked === true) {
      this.getTypesColorMock();
      this.getAllTypeCardsMock(this.versionFifa!.value);
    }
    if (environment.isMocked === false) {
      this.getTypesColor();
      this.getAllTypeCards(this.versionFifa!.value);
    }
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
