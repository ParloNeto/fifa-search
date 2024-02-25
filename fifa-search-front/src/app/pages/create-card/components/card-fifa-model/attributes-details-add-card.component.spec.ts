import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AttributesDetailsAddCardComponent } from './attributes-details-add-card.component';
import { CardService } from 'src/app/service/card.service';


describe('AttributesDetailsAddCardComponent', () => {
  let component: AttributesDetailsAddCardComponent;
  let fixture: ComponentFixture<AttributesDetailsAddCardComponent>;
  let mockCardService: CardService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        MatIconModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        AttributesDetailsAddCardComponent,
    ],
    providers: [FormBuilder],
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesDetailsAddCardComponent);
    component = fixture.componentInstance;
    mockCardService = TestBed.inject(CardService);

    component.infoCardsForm = new FormGroup({
      versionFifa: new FormControl('fifa-16', Validators.required),
      typeCard: new FormControl('futties', Validators.required),
      firstName: new FormControl('Lionel', Validators.required),
      lastName: new FormControl('Messi', Validators.required),
      nickName: new FormControl('', Validators.required),
      nationality: new FormControl('brazil', Validators.required),
      club: new FormControl('palmeiras', Validators.required),
      position: new FormControl('RW', Validators.required),
      photo: new FormControl(
        'https://futhead.cursecdn.com/static/img/23/players/158023.png',
        Validators.required
      ),
    });
    component.attributeCard = new FormGroup({
      overall: new FormControl(94, Validators.required),
      pace: new FormControl(81, Validators.required),
      shooting: new FormControl(92, Validators.required),
      passing: new FormControl(89, Validators.required),
      dribbling: new FormControl(94, Validators.required),
      defending: new FormControl(37, Validators.required),
      physicality: new FormControl(67, Validators.required),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should update photoUrl when getPhotoType is called', () => {
  //   const mockCardResponse = {
  //     fifaVersion: 'fifa-16',
  //     cardType: 'futties',
  //     photoUrl: 'https://mocked-photo-url.com/image.png',
  //     colorText: {
  //       colorOverall: '#FFFFFF',
  //       colorFontName: '#FFFFFF',
  //       colorPosition: '#FFFFFF',
  //       colorAttributes: '#FFFFFF',
  //     },
  //   };

  //   spyOn(mockCardService, 'getSpecificType').and.returnValue(
  //     of(mockCardResponse)
  //   );

  //   component.infoCardsForm.patchValue({
  //     versionFifa: 'fifa-16',
  //     typeCard: 'futties',
  //   });

  //   component.getPhotoType();

  //   expect(mockCardService.getSpecificType).toHaveBeenCalledWith(
  //     'fifa-16',
  //     'futties'
  //   );
  //   expect(component.photoUrl).toBe('https://mocked-photo-url.com/image.png');
  // });

});
