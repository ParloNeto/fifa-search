import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { FutHeaderComponent } from './fut-header/fut-header.component';

//Routes
import { RouterModule } from '@angular/router';

//Material

import { ConfirmDialogComponent } from './material/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import { ClearFieldDirective } from './directives/clear-field.directive';

@NgModule({
    declarations: [
        FutHeaderComponent,
        ConfirmDialogComponent,
        ClearFieldDirective
    ],
    exports: [
        FutHeaderComponent,
        ClearFieldDirective
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
    ]
})
export class SharedModule { }
