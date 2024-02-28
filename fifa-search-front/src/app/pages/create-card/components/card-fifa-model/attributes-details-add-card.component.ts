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

  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {}

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

  public changeStyleByVersion(): string {
    return this.infoCardsForm.value.versionFifa + ': card-' + this.infoCardsForm.value.versionFifa;
  }

  public changeStyleByTypeCard(): string {
    console.log('card-'+ this.infoCardsForm.value.versionFifa + '-' + this.infoCardsForm.value.typeCard)
    return 'card-'+ this.infoCardsForm.value.versionFifa + '-' + this.infoCardsForm.value.typeCard
  }
}
