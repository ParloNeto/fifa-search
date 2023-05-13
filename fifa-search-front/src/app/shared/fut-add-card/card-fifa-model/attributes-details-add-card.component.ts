import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { NationService } from 'src/app/service/nation.service';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-attributes-details-add-card',
  templateUrl: './attributes-details-add-card.component.html',
  styleUrls: ['./attributes-details-add-card.component.scss']
})
export class AttributesDetailsAddCardComponent implements OnInit {
  @Input() infoCardsForm!: FormGroup;
  @Input() attributeCard!: FormGroup;

  photoUrl!: string;
  nationUrl!: string;
  clubUrl!: string;

  colorOverall: string = '';
  colorFontName: string = '';
  colorPosition: string = '';
  colorAttributes: string = '';

  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;
  cardTypeAdjust: string = '';
 
  public cardImage: string = '';
  
  
  constructor(
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService,
  ) {}

  ngOnInit(): void {
    this.initializeValuesInSelect();
    this.watchTheSelectChanges();
  }

  public watchTheSelectChanges(): void {
    this.infoCardsForm.valueChanges.subscribe(() => {
      this.getPhotoType();
      this.getNation();
      this.getClub();
      this.cardTypeAdjust = this.infoCardsForm.get('versionFifa')!.value;
    });
  }

  public initializeValuesInSelect(): void {
    this.getNation();
    this.getClub();
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

  public getNation(): void { 
    const nation = this.infoCardsForm.get('nationality')!.value;

    this.nationService.getSpecificNation(nation).subscribe(card => {
      if (nation == card.nation) this.nationUrl = card.nationUrl;
    });
  }

  public getClub(): void { 
    const club = this.infoCardsForm.get('club')!.value;

    this.clubService.getSpecificClub(club).subscribe(card => {
      if (club == card.club) this.clubUrl = card.clubUrl;
    });
  }
}
