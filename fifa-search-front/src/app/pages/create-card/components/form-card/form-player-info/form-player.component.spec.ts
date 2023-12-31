import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormPlayerComponent } from './form-player.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { CardService } from 'src/app/service/card.service';
import { NationService } from 'src/app/service/nation.service';
import { ClubService } from 'src/app/service/club.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { clubMock, clubsMock, mockListClub, mockListNation, mockListTypeCard } from 'src/app/core/models/test/mock-models';

// Stub do serviço FutApiService
class FutApiServiceStub {
  createCard() {
    return {
      subscribe: () => {}
    };
  }
}

// Stub dos serviços CardService, NationService e ClubService
class CardServiceStub {
  getVersionCards() {
    return [mockListTypeCard];
  }
}

class NationServiceStub {
  getAllNations() {
    return [mockListNation];
  }
}

class ClubServiceStub {
  getAllClubs() {
    return [mockListClub];
  }
}

describe('FormPlayerComponent', () => {
  let component: FormPlayerComponent;
  let fixture: ComponentFixture<FormPlayerComponent>;
  let futApiService: FutApiService;
  let router: Router;
  let snackBar: MatSnackBar;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormPlayerComponent],
      providers: [
        FormBuilder,
        { provide: FutApiService, useClass: FutApiServiceStub },
        { provide: CardService, useClass: CardServiceStub },
        { provide: NationService, useClass: NationServiceStub },
        { provide: ClubService, useClass: ClubServiceStub },
        { provide: Router, useValue: { navigateByUrl: () => {} } },
        { provide: MatSnackBar, useValue: { open: () => {} } }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlayerComponent);
    component = fixture.componentInstance;
    futApiService = TestBed.inject(FutApiService);
    router = TestBed.inject(Router);
    snackBar = TestBed.inject(MatSnackBar);
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
    spyOn(futApiService, 'createCard').and.callThrough();
  
    
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
  
    expect(futApiService.createCard).toHaveBeenCalled();
  }));

  it('should set selectedClubCard based on allClubs', () => {
    component.getAllClubs();

    clubsMock.forEach((club) => {
      component.selectedClubCard.push(club);
    });
    
    expect(component.selectedClubCard).not.toEqual([ clubMock ]);
  });

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
