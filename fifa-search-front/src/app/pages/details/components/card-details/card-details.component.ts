import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/service/card.service';
import { ClubService } from 'src/app/service/club.service';
import { FutApiService } from 'src/app/service/fut-api.service';
import { NationService } from 'src/app/service/nation.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  @Output() public InformLoading = new EventEmitter();
  @Output() public informId = new EventEmitter();
  @Output() public dataCard = new EventEmitter();

  public photoUrl: string = '';
  public clubUrl: string = '';
  public nationUrl: string = '';
  public card!: Card;

  public colorOverall: string = '';
  public colorFontName: string = '';
  public colorPosition: string = '';
  public colorAttributes: string = '';

  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;

  constructor(
    private activatedRoute: ActivatedRoute,
    private futApiService: FutApiService,
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService
  ) {}
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.futApiService.getCard(`${id}`).subscribe({
        next: (res) => {
          this.card = res;
          this.getPhotoType();
          this.getNation();
          this.getClub();
          this.dataCard.emit((res));
          this.InformLoading.emit(true);
          this.informId.emit(this.card.id);
        },
        error: () => this.InformLoading.emit(false),
      });
    });
  }

  public getPhotoType(): void {
    const version = this.card.versionFifa;
    const typeCard = this.card.typeCard;

    this.cardService.getSpecificType(version, typeCard).subscribe((card) => {
      this.photoUrl = card.photoUrl;
      this.colorFontName = card.colorText.colorFontName;
      this.colorOverall = card.colorText.colorOverall;
      this.colorPosition = card.colorText.colorPosition;
      this.colorAttributes = card.colorText.colorAttributes;
    });
  }

  public getNation(): void {
    const nation = this.card.nationality;
    if (nation) {
      this.nationService.getSpecificNation(nation).subscribe((card) => {
        this.nationUrl = card.nationUrl;
      });
    }
  }

  public getClub(): void {
    const club = this.card.club.name;
    if (club) {
      this.clubService.getSpecificClub(club).subscribe((card) => {
        this.clubUrl = card.clubUrl;
      });
    }
  }
}
