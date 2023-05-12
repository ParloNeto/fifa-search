import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent {

  public loading: boolean = true;
  public card: any = {};

  public id!: string;

  public getInfoLoading(event: boolean) {
    this.loading = event;
  }

  public getId(event: string) {
    this.id = event;
  }

  public getDataCard(event: Card) {
    this.card = event;
  }
 
}


