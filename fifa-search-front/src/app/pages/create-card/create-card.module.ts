import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card.component';
import { UpperCaseDirective } from 'src/app/shared/directives/upper-case.directive';
import { FutGoBackButtonComponent } from 'src/app/shared/components/buttons/fut-go-back-button.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributesDetailsAddCardComponent } from 'src/app/pages/create-card/components/card-fifa-model/attributes-details-add-card.component';
import { FormAttributesComponent } from 'src/app/pages/create-card/components/form-card/form-attributes/form-attributes.component';
import { FormPlayerComponent } from 'src/app/pages/create-card/components/form-card/form-player-info/form-player.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FutGoBackButtonComponent,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        AddCardComponent,
        UpperCaseDirective,
        FormPlayerComponent,
        AttributesDetailsAddCardComponent,
        FormAttributesComponent,
    ],
})
export class CreateCardModule {}
