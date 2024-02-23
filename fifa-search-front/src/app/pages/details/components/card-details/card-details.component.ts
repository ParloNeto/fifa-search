import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core/models/card.interface';
import { CardService } from 'src/app/service/card.service';
import { FutApiService } from 'src/app/service/fut-api.service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle],
})
export class CardDetailsComponent implements OnInit {
  @Output() public InformLoading = new EventEmitter();
  @Output() public informId = new EventEmitter();
  @Output() public dataCard = new EventEmitter();

  public photoUrl: string | undefined  = '';
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
  ) {}

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.futApiService.getCard(`${id}`).subscribe({
        next: (res) => {
          this.card = res;
          this.getPhotoType();
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
}
