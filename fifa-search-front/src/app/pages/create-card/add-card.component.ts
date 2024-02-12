import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ColorText } from 'src/app/core/models/colorText.interface';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  public attributeCard: FormGroup;
  public infoCardsForm: FormGroup;
  public colorText!: ColorText;

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

  public getColorText(event: ColorText) {
    this.colorText = event;
    console.log(event)
  }
}
