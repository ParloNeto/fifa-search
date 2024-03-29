import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormPlayerComponent } from './form-player.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { clubNameMock, mockListTypeCard } from 'src/app/core/models/test/mock-models';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Stub dos serviços CardService, NationService e ClubService
class CardServiceStub {
  getVersionCards() {
    return [mockListTypeCard];
  }
}

describe('FormPlayerComponent', () => {
  let component: FormPlayerComponent;
  let fixture: ComponentFixture<FormPlayerComponent>;
  let futApiService: FutApiService;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientTestingModule, FormPlayerComponent],
    providers: [
        FormBuilder,
        FutApiService,
        { provide: CardService, useClass: CardServiceStub },
        { provide: Router, useValue: { navigateByUrl: () => { } } },
        { provide: MatSnackBar, useValue: { open: () => { } } }
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlayerComponent);
    component = fixture.componentInstance;
    futApiService = TestBed.inject(FutApiService);
    formBuilder = TestBed.inject(FormBuilder);

    component.infoCardsForm = formBuilder.group({
        versionFifa: 'fifa-21',
        typeCard: 'futties',
        firstName: 'Lionel',
        lastName: 'Messi',
        nickName: '',
        nationality: 'argentina',
        club: 'palmeiras',
        position: 'RW',
        photo: 'https://futhead.cursecdn.com/static/img/23/players/158023.png',
      });
      
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format option to uppercase', () => {
    const option = 'fifa-21';
    const formatted = component.formatUpperCase(option);
    expect(formatted).toBe('FIFA 21');
  });

  it('should format option without hyphen', () => {
    const option = 'fifa-21';
    const formatted = component.formatWithoutHyphen(option);
    expect(formatted).toBe('fifa 21');
  });

  it('should call addCard method from FutApiService when form is valid', fakeAsync(() => {
    spyOn(futApiService, 'httpCardCreate$').and.callThrough();
  
    
    component.attributeCard = formBuilder.group({
      
    });
  
    component.infoCardsForm.patchValue({
      versionFifa: 'fifa-21',
      typeCard: 'futties',
      firstName: 'Lionel',
      lastName: 'Messi',
      nickName: '',
      nationality: 'argentina',
      club: 'palmeiras',
      position: 'RW',
      photo: 'https://futhead.cursecdn.com/static/img/23/players/158023.png',
    });
  
    component.submitForm();
    tick();
  
    expect(futApiService.httpCardCreate$).toHaveBeenCalled();
  }));

  it('should call addCard method from FutApiService when form is valid', () => {
    
  })

  it('should add item to arraySelect', () => {
    const arraySelect: string[] = [];
    const item = 'item';

    component.addItemsInSelectArray(arraySelect, item);

    expect(arraySelect).toEqual(['item']);
  });

  it('should emit form value', () => {
    spyOn(component.sendInfoCard, 'emit').and.callThrough();

    component.emitsFormValue();

    expect(component.sendInfoCard.emit).toHaveBeenCalledWith(component.infoCardsForm);
  });
});
