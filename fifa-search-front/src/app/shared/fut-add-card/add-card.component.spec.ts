import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardComponent } from './add-card.component';
import { AttributesDetailsAddCardComponent } from './card-fifa-model/attributes-details-add-card.component';
import { FormAttributesComponent } from './details-add-card/form-attributes/form-attributes.component';
import { FormPlayerComponent } from './details-add-card/form-player-info/form-player.component';
import { FutGoBackButtonComponent } from './fut-go-back-button/fut-go-back-button.component';
import { FutHeaderComponent } from '../fut-header/fut-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddCardComponent', () => {
  let component: AddCardComponent;
  let fixture: ComponentFixture<AddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardComponent, FormPlayerComponent, FormAttributesComponent, FutGoBackButtonComponent, FutHeaderComponent, AttributesDetailsAddCardComponent ],
      imports: [ HttpClientTestingModule, MaterialModule, RouterTestingModule, FormsModule, ReactiveFormsModule]
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
