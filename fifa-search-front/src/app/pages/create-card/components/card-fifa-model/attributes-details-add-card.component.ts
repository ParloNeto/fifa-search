import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { ColorText } from 'src/app/core/models/colorText';

@Component({
  selector: 'app-attributes-details-add-card',
  templateUrl: './attributes-details-add-card.component.html',
  styleUrls: ['./attributes-details-add-card.component.scss'],
})
export class AttributesDetailsAddCardComponent implements OnInit, OnChanges {
  @Input() infoCardsForm!: FormGroup;
  @Input() attributeCard!: FormGroup;
  @Input() cardColorText!: ColorText;

  photoUrl!: string;

  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;
  cardTypeAdjust: string = '';

  public cardImage: string = '';

  constructor(
    private cardService: CardService
  ) {}
  ngOnChanges(): void {
    console.log(this.cardColorText)
  }

  ngOnInit(): void {
    this.watchTheSelectChanges();
    this.cardColorText = {
      colorOverall: '#000000e6',
      colorFontName: '#000000e6',
      colorPosition: '#000000e6',
      colorAttributes: '#000000e6',
    };
  }

  public imagePath(nation?: string, club?: string): string {
    let srcPath: string;

    if (nation) {
      srcPath = `../../../../../assets/images/nation/${nation}.png`;
    }

    if (club) {
      srcPath = `../../../../../assets/images/clubbadges/${club}.png`;
    }

    return srcPath!;
  }

  public imagePathCard(version?: string, typeCard?: string): string {
    let srcPath: string;
    if (version && typeCard) {
      srcPath = `../../../../../assets/images/${version}/${typeCard}.png`;
    }
    return srcPath!;
  }

  public watchTheSelectChanges(): void {
    this.infoCardsForm.valueChanges.subscribe( () => (this.cardTypeAdjust = this.infoCardsForm.get('versionFifa')!.value));
  }
}
