import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-player',
  templateUrl: './description-player.component.html',
  styleUrls: ['./description-player.component.scss']
})
export class DescriptionPlayerComponent implements OnInit {
  @Input() public cardInformation: any = {};

  public capitalizeFirstLetter(word: string): string {
    return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  }

  ngOnInit(): void {
   console.log(this.cardInformation.firstName);
  }

}
