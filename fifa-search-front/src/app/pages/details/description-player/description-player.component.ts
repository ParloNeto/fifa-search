import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DescriptionPlayer } from 'src/app/models/descriptionCard';

@Component({
  selector: 'app-description-player',
  templateUrl: './description-player.component.html',
  styleUrls: ['./description-player.component.scss']
})
export class DescriptionPlayerComponent implements OnInit {
  @Input() public cardInformation!: DescriptionPlayer;


  public capitalizeFirstLetter(word: string): string {
    return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  }

  ngOnInit(): void {}

}
