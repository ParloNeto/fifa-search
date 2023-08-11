import { Component, Input } from '@angular/core';
import { DescriptionPlayer } from 'src/app/models/descriptionCard';

@Component({
  selector: 'app-description-player',
  templateUrl: './description-player.component.html',
  styleUrls: ['./description-player.component.scss']
})
export class DescriptionPlayerComponent {

  @Input() public cardInformation!: DescriptionPlayer;

  public capitalizeFirstLetter(word: string): string {
    return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  }

}
