import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FutGoBackButtonComponent } from '../../shared/components/buttons/fut-go-back-button.component';
import { FormAttributesComponent } from './components/form-card/form-attributes/form-attributes.component';
import { AttributesDetailsAddCardComponent } from './components/card-fifa-model/attributes-details-add-card.component';
import { FormPlayerComponent } from './components/form-card/form-player-info/form-player.component';
import { FutHeaderComponent } from '../../shared/components/fut-header/fut-header.component';

@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.scss'],
    standalone: true,
    imports: [
        FutHeaderComponent,
        FormPlayerComponent,
        AttributesDetailsAddCardComponent,
        FormAttributesComponent,
        FutGoBackButtonComponent,
    ],
})
export class AddCardComponent {
  public attributeCard: FormGroup;
  public infoCardsForm: FormGroup;

  constructor() {
    this.attributeCard = new FormGroup({});
    this.infoCardsForm = new FormGroup({});
  }
  public getForm(event: FormGroup) {
    this.attributeCard = event;
  }

  public getInfoCardForm(event: FormGroup) {
    this.infoCardsForm = event;
  }
}
