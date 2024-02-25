import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { ColorText } from 'src/app/core/models/colorText.interface';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-attributes-details-add-card',
  templateUrl: './attributes-details-add-card.component.html',
  styleUrls: ['./attributes-details-add-card.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle],
})
export class AttributesDetailsAddCardComponent implements OnInit, OnChanges {
  @Input() infoCardsForm!: FormGroup;
  @Input() attributeCard!: FormGroup;
  @Input() cardColorText!: ColorText;

  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {
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

  public changeStyleByVersion(): string {
    return this.infoCardsForm.value.versionFifa + ': card-' + this.infoCardsForm.value.versionFifa;
  }
}
