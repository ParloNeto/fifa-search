import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { FutHeaderComponent } from './fut-header/fut-header.component';
import { FutSearchComponent } from './fut-search/fut-search.component';
import { FutListComponent } from './fut-list/fut-list.component';
import { RouterModule } from '@angular/router';
import { FutAddCardComponent } from './fut-add-card/fut-add-card.component';
import { DetailsAddCardComponent } from './fut-add-card/details-add-card/details-add-card.component';
import { AttributesDetailsAddCardComponent } from './fut-add-card/details-add-card/attributes-details-add-card/attributes-details-add-card.component';

//DiretivasPersonalizadas
import { ClearFieldDirective } from '../directives/clear-field.directive';

//Material
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
    declarations: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent,
        DetailsAddCardComponent,
        AttributesDetailsAddCardComponent,
        ClearFieldDirective
       
    ],
    exports: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule
    ]
})
export class SharedModule { }
