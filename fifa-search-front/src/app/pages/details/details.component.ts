import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/service/card.service';

import { FutApiService } from 'src/app/service/fut-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  private urlCard: string = '/cards';
  public photoUrl: string = '';
  public card: any = {};

  public isLoading: boolean = false;
  public apiError: boolean = false;

  public cardTypeMapping = this.cardService.cardTypeMapping;
  public logoMapping = this.cardService.logoMapping;
  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;
  public nationMapping = this.cardService.nationMapping;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private futApiService: FutApiService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.futApiService.getCard(`${this.urlCard}/${id}`).subscribe((res) => {
        this.card = res;
        this.isLoading = true;
        this.getPhotoType();
      }, error => {
        this.apiError = true;
      });
    });
  }
  
  getPhotoType(): void {
    
    const version = this.card.versionFifa;
      const typeCard = this.card.typeCard;
        if (version && typeCard) {
          this.cardService.getSpecificType(version, typeCard).subscribe(card => {
              this.photoUrl = card.photoUrl;
              console.log(`o valor é:`, typeCard, version, card.photoUrl);
          });
        }
   }

}


