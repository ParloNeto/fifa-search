import { Component } from '@angular/core';
import { Card } from 'src/app/core/models/card.interface';
import { DescriptionPlayer } from 'src/app/core/models/descriptionCard.interface';
import { InformationButtonsComponent } from './components/information-buttons/information-buttons.component';
import { DescriptionPlayerComponent } from './components/description-player/description-player.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NgIf } from '@angular/common';
import { FutHeaderComponent } from '../../shared/components/fut-header/fut-header.component';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    standalone: true,
    imports: [
        FutHeaderComponent,
        NgIf,
        CardDetailsComponent,
        DescriptionPlayerComponent,
        InformationButtonsComponent,
    ],
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
      clubName: event.club,
      photo: event.photo,
    };
  }
}
