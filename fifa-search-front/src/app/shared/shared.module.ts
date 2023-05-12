import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { FutHeaderComponent } from './fut-header/fut-header.component';
import { FutSearchComponent } from './fut-search/fut-search.component';
import { FutListComponent } from './fut-list/fut-list.component';
import { FutAddCardComponent } from './fut-add-card/fut-add-card.component';

//Routes
import { RouterModule } from '@angular/router';

//Material

import { ConfirmDialogComponent } from './material/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';
@NgModule({
    declarations: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent,
        ConfirmDialogComponent
    ],
    exports: [
        FutHeaderComponent,
        FutListComponent,
        FutAddCardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
    ]
})
export class SharedModule { }
