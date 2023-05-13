import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { RouterModule } from '@angular/router';


//DiretivasPersonalizadas
import { ClearFieldDirective } from '../../directives/clear-field.directive';
import { MaterialModule } from '../material/material.module';
import { AddCardComponent } from './add-card.component';
import { FormAttributesComponent } from './details-add-card/form-attributes/form-attributes.component';

import { SharedModule } from '../shared.module';
import { FormPlayerComponent } from './details-add-card/form-player-info/form-player.component';
import { AttributesDetailsAddCardComponent } from './card-fifa-model/attributes-details-add-card.component';
import { FutGoBackButtonComponent } from './fut-go-back-button/fut-go-back-button.component';
import { UpperCaseDirective } from 'src/app/directives/upper-case.directive';


@NgModule({
    declarations: [
        FormPlayerComponent,
        AttributesDetailsAddCardComponent,
        ClearFieldDirective,
        UpperCaseDirective,
        AddCardComponent,
        FormAttributesComponent,
        FutGoBackButtonComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedModule
    ]
})
export class CardModule { }
