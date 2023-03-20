import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { ClubService } from 'src/app/service/club.service';

import { FutApiService } from 'src/app/service/fut-api.service';
import { NationService } from 'src/app/service/nation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  private urlCard: string = '/cards';
  public photoUrl: string = '';
  public clubUrl: string = '';
  public nationUrl: string = '';
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
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.futApiService.getCard(`${this.urlCard}/${id}`).subscribe((res) => {
        this.card = res;
        this.isLoading = true;
        this.getPhotoType();
        this.getNation();
        this.getClub();
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

   getNation(): void { 
    const nation = this.card.nationality;
    this.nationService.getSpecificNation(nation).subscribe(card => {
    if (nation) {
        this.nationUrl = card.nationUrl;
      console.log(this.nationUrl)
    } else{
      console.log('deu ruim')
    }
    });
  }

  getClub(): void { 
    const club = this.card.club;
    this.clubService.getSpecificClub(club).subscribe(card => {
    if (club) {
        this.clubUrl = card.clubUrl;
      console.log(this.clubUrl)
    } else{
      console.log('deu ruim')
    }
    });
  }

}


