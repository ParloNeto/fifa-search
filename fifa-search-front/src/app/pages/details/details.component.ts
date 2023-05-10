import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  public loading: boolean = true;
  public apiError: boolean = false;

  public photoUrl: string = '';
  public clubUrl: string = '';
  public nationUrl: string = '';
  public card: any = {};

  public id!: string;

  constructor() {}

  ngOnInit(): void {}
  
  

  public getInfoLoading(event: boolean) {
    this.loading = event;
  }

  public getInfoErrorApi(event: boolean) {
    this.apiError = event;
  }

  public getId(event: string) {
    this.id = event;
  }

  public getDataCard(event: Card) {
    this.card = event;
  }
 
}


