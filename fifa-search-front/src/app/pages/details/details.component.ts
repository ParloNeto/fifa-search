import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DescriptionPlayer } from 'src/app/models/descriptionCard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  
  public loading: boolean = true;
  public description!: DescriptionPlayer;

  public id!: string;

  public getInfoLoading(event: boolean) {
    this.loading = event;
  }

  public getId(event: string) {
    this.id = event;
  }

  public getDescriptionCard(event: Card) {
    this.description = {
      nickName: event.nickName,
      firstName: event.firstName,
      lastName: event.lastName,
      nationality: event.nationality,
      clubName: event.club.name,
    };
  }
}
