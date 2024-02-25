import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardComponent } from './add-card.component';
import { AttributesDetailsAddCardComponent } from './components/card-fifa-model/attributes-details-add-card.component';
import { FormAttributesComponent } from './components/form-card/form-attributes/form-attributes.component';
import { FormPlayerComponent } from './components/form-card/form-player-info/form-player.component';
import { FutGoBackButtonComponent } from '../../shared/components/buttons/fut-go-back-button.component';
import { FutHeaderComponent } from '../../shared/components/fut-header/fut-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddCardComponent', () => {
  let component: AddCardComponent;
  let fixture: ComponentFixture<AddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule, FutGoBackButtonComponent, AddCardComponent, FormPlayerComponent, FormAttributesComponent, FutHeaderComponent, AttributesDetailsAddCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
