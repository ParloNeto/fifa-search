import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { FutHeaderComponent } from './fut-header/fut-header.component';
import { FutSearchComponent } from './fut-search/fut-search.component';
import { FutListComponent } from './fut-list/fut-list.component';
import { RouterModule } from '@angular/router';
import { FutAddCardComponent } from './fut-add-card/fut-add-card.component';
import { DetailsAddCardComponent } from './fut-add-card/details-add-card/details-add-card.component';




@NgModule({
    declarations: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent,
        DetailsAddCardComponent
       
    ],
    exports: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent,
        DetailsAddCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
