import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { RouterModule } from '@angular/router';
import { DetailsAddCardComponent } from './details-add-card/details-add-card.component';
import { AttributesDetailsAddCardComponent } from './details-add-card/attributes-details-add-card/attributes-details-add-card.component';

//DiretivasPersonalizadas
import { ClearFieldDirective } from '../../directives/clear-field.directive';
import { MaterialModule } from '../material/material.module';
import { AddCardComponent } from './add-card.component';
import { FormAttributesComponent } from './details-add-card/form-attributes/form-attributes.component';
import { CardFifaModelComponent } from './card-fifa-model/card-fifa-model.component';
import { SharedModule } from '../shared.module';


@NgModule({
    declarations: [
        DetailsAddCardComponent,
        AttributesDetailsAddCardComponent,
        ClearFieldDirective,
        AddCardComponent,
        FormAttributesComponent,
        CardFifaModelComponent
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
