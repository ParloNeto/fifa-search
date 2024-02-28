import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core/models/card.interface';
import { FutApiService } from 'src/app/service/fut-api.service';
import { JsonPipe, NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle, JsonPipe],
})
export class CardDetailsComponent implements OnInit {
  @Output() public InformLoading = new EventEmitter();
  @Output() public informId = new EventEmitter();
  @Output() public dataCard = new EventEmitter();

  public card!: Card;

  #futApiService = inject(FutApiService);

  public getCardById = this.#futApiService.getCardId;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.#futApiService.httpCardId$(id).subscribe({
        next: (res) => {
          this.card = res;
          this.dataCard.emit((res));
          this.InformLoading.emit(true);
          this.informId.emit(this.card.id);
        },
        error: () => this.InformLoading.emit(false),
      });
    });
  }

  public changeStyleByVersion(): string {
    return this.card.versionFifa + ': card-' + this.card.versionFifa;
  }

  public changeStyleByTypeCard(): string {
    console.log('card-'+ this.card.versionFifa + '-' + this.card.typeCard)
    return 'card-'+ this.card.versionFifa + '-' + this.card.typeCard
  }
}
