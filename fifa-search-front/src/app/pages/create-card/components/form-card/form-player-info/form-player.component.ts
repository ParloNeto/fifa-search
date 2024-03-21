import { ColorText } from '../../../../../core/models/colorText.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FIFA_16,
  FIFA_17,
  FIFA_18,
  FIFA_19,
  FIFA_20,
} from 'src/app/service/mocks/utils';
import { UpperCaseDirective } from '../../../../../shared/directives/upper-case.directive';
import { NgFor, NgClass, AsyncPipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgClass, UpperCaseDirective, AsyncPipe],
})
export class FormPlayerComponent implements OnInit {
  #fb = inject(FormBuilder);
  #futApiService = inject(FutApiService);

  public getClubs = this.#futApiService.getClubs;
  public getNations = this.#futApiService.getNations;

  @Input() attributeCard!: FormGroup;
  @Output() sendInfoCard = new EventEmitter<FormGroup>();

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

  public infoCardsForm: FormGroup;
  constructor(
    private cardService: CardService,
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

    this.#futApiService.getAllClubsMock().subscribe();
    this.#futApiService.getAllNationsMock().subscribe();

    this.infoCardsForm.patchValue({
      nationality: 'argentina',
      club: 'arsenal',
      versionFifa: 'fifa-17',
      typeCard: 'gold-rare',
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
      this.submitValidForm();
      return !isDisabled;
    }

    return !isDisabled;
  }

  /* istanbul ignore next */
  private submitValidForm(): void {
    const data = this.getFormData();
    this.#futApiService.httpCardCreate$(data).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError(),
    });
  }

  /* istanbul ignore next */
  private getFormData(): any {
    return Object.assign({}, this.infoCardsForm.value, {
      attributeCard: this.attributeCard.value,
    });
  }

/* istanbul ignore next */
  private handleSuccess(): void {
    this.router.navigateByUrl('');
    this.snackBar.open('Jogador adicionado com sucesso!', 'Fechar', {
      duration: 3000,
    });
  }

/* istanbul ignore next */
  private handleError(): void {
    this.snackBar.open(
      'Não foi possível adicionar esse jogador. Tente novamente mais tarde.',
      'Fechar',
      {
        duration: 3000,
      }
    );
  }

  public filterTypeByVersion(): void {
    this.selectedTypeCard = [];

    if (environment.isMocked === true)
      this.getAllTypeCardsMock(this.versionFifa!.value);
    else {
      this.getAllTypeCards(this.versionFifa!.value);
    }
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

  public executeBasedOnMockStatus(): void {
    if (environment.isMocked === true) {
      this.getAllTypeCardsMock(this.versionFifa!.value);
    }
    if (environment.isMocked === false) {
      this.getAllTypeCardsMock(this.versionFifa!.value);
      // this.getAllTypeCards(this.versionFifa!.value);
    }
  }

  public addItemsInSelectArray(arraySelect: string[], item: string): string[] {
    arraySelect.push(item);
    return arraySelect.sort((a, b) => a.localeCompare(b));
  }

  public emitsFormValue(): void {
    return this.sendInfoCard.emit(this.infoCardsForm);
  }
}
