import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { FutHeaderComponent } from '../fut-header/fut-header.component';
import { FutSearchComponent } from '../fut-search/fut-search.component';
import { FutListComponent } from '../fut-list/fut-list.component';
import { RouterModule } from '@angular/router';
import { FutAddCardComponent } from './fut-add-card.component';
import { DetailsAddCardComponent } from './details-add-card/details-add-card.component';
import { AttributesDetailsAddCardComponent } from './details-add-card/attributes-details-add-card/attributes-details-add-card.component';

//DiretivasPersonalizadas
import { ClearFieldDirective } from '../../directives/clear-field.directive';

//Material
import {MatSnackBarModule} from '@angular/material/snack-bar';



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
        FormsModule
    ]
})
export class CardModule { }
