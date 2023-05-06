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

@NgModule({
    declarations: [
        DetailsAddCardComponent,
        AttributesDetailsAddCardComponent,
        ClearFieldDirective
       
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ]
})
export class CardModule { }
