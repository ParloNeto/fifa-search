import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormPlayerComponent } from './form-player.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UpperCaseDirective } from 'src/app/shared/directives/upper-case.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FutApiService } from 'src/app/service/fut-api.service';
import { of } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { clubsMockService } from 'src/app/service/mocks/club-mocks';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormPlayerComponent', () => {
  let component: FormPlayerComponent;
  let fixture: ComponentFixture<FormPlayerComponent>;
  let futApiService: FutApiService;
  let router: Router;
  let formBuilder: FormBuilder;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [  ],
      imports: [ ReactiveFormsModule, CommonModule,MatSnackBarModule, UpperCaseDirective, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [ {provide: FutApiService} ] // Importe os módulos necessários
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlayerComponent);
    component = fixture.componentInstance;
    formBuilder = new FormBuilder();
    futApiService = TestBed.inject(FutApiService) as jasmine.SpyObj<FutApiService>;
    router = TestBed.inject(Router);
    futApiService.getAllClubsMock().subscribe();

    component.infoCardsForm = new FormGroup({
      versionFifa: new FormControl('fifa-17', Validators.required),
      typeCard: new FormControl('futties', [Validators.required, Validators.maxLength(50)]),
      firstName: new FormControl('Lionel', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('Messi', [Validators.required, Validators.maxLength(20)]),
      nickName: new FormControl('', Validators.maxLength(30)),
      nationality: new FormControl('argentina', Validators.required),
      club: new FormControl('palmeiras', Validators.required),
      position: new FormControl('RW', [Validators.required, Validators.maxLength(3)]),
      photo: new FormControl('https://futhead.cursecdn.com/static/img/23/players/158023.png', Validators.required),
    });
    component.attributeCard = new FormGroup({
      overall: new FormControl(94, [Validators.maxLength(2), Validators.required]),
      pace: new FormControl(81, [Validators.maxLength(2), Validators.required]),
      shooting: new FormControl(92, [Validators.maxLength(2), Validators.required]),
      passing: new FormControl(89, [Validators.maxLength(2), Validators.required]),
      dribbling: new FormControl(94, [Validators.maxLength(2), Validators.required]),
      defending: new FormControl(37, [Validators.maxLength(2), Validators.required]),
      physicality: new FormControl(67, [Validators.maxLength(2), Validators.required])
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "input-error" when form control is invalid and touched or dirty', () => {
    const control = component.infoCardsForm.get('firstName')!;
    control.setValue('');
    control.markAsDirty();

    expect(component.checkValidateAttributes(control)).toEqual('input-error');
  });

  it('should return "input-error" when form control is invalid and touched or dirty', () => {
    const control = component.infoCardsForm.get('lastName')!;
    control.setValue('');
    control.markAsDirty();

    expect(component.checkValidateAttributes(control)).toEqual('input-error');
  });

  it('should return "input-error" when form control is invalid and touched or dirty', () => {
    const control = component.infoCardsForm.get('nationality')!;
    control.setValue('');
    control.markAsDirty();

    expect(component.checkValidateAttributes(control)).toEqual('input-error');
  });

  it('should not return "erro-de-input" when form control is valid', () => {
    const control = component.infoCardsForm.get('firstName')!;
    control.setValue('valor válido');
    control.markAsDirty();

    expect(component.checkValidateAttributes(control)).not.toEqual('erro-de-input');
  });

  // adicione mais testes aqui
  it('should return formatted string in uppercase', () => {
    const formatted = component.formatUpperCase('fifa-17');
    expect(formatted).toEqual('FIFA 17');
  });


  it('should submit the form', () => {
    const result = component.submitForm();
    expect(result).toBeFalse();
  });

  it('should submit the invalid form', () => {
    component.infoCardsForm.patchValue({
      firstName: '',
      lastName: 'Messi',
  });
  const resultInvalid = component.infoCardsForm.invalid;

  if (resultInvalid) {
    // expect(resultInvalid).toBeTruthy();
    expect(resultInvalid).toBeTrue();
  }


  });

  it('should get position control', () => {
    const control = formBuilder.control('');
    component.infoCardsForm = formBuilder.group({ position: control });

    expect(component.position).toBe(control);
  });

  it('should get versionFifa control', () => {
    const control = formBuilder.control('fifa-16');
    component.infoCardsForm = formBuilder.group({ versionFifa: control });

    expect(component.versionFifa).toBe(control);
  });

  it('should get typeCard control', () => {
    const control = formBuilder.control('futties');
    component.infoCardsForm = formBuilder.group({ typeCard: control });

    expect(component.typeCard).toBe(control);
  });

  it('should get nickName control', () => {
    const control = formBuilder.control('');
    component.infoCardsForm = formBuilder.group({ nickName: control });

    expect(component.nickName).toBe(control);
  });

  it('should get nationality control', () => {
    const control = formBuilder.control('brazil');
    component.infoCardsForm = formBuilder.group({ nationality: control });

    expect(component.nationality).toBe(control);
  });

  it('should get club control', () => {
    const control = formBuilder.control('palmeiras');
    component.infoCardsForm = formBuilder.group({ club: control });

    expect(component.club).toBe(control);
  });

});
