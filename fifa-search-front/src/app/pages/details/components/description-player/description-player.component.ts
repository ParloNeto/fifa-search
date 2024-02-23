import { Component, Input } from '@angular/core';
import { DescriptionPlayer } from 'src/app/core/models/descriptionCard.interface';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-description-player',
    templateUrl: './description-player.component.html',
    styleUrls: ['./description-player.component.scss'],
    standalone: true,
    imports: [NgIf, UpperCasePipe]
})
export class DescriptionPlayerComponent {

  @Input() public cardInformation!: DescriptionPlayer;

  public capitalizeFirstLetter(word: string): string {
    return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  }

}
