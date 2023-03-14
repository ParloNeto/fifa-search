import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { FutHeaderComponent } from './fut-header/fut-header.component';
import { FutSearchComponent } from './fut-search/fut-search.component';
import { FutListComponent } from './fut-list/fut-list.component';
import { RouterModule } from '@angular/router';
import { FutAddCardComponent } from './fut-add-card/fut-add-card.component';

@NgModule({
    declarations: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent
    ],
    exports: [
        FutHeaderComponent,
        FutSearchComponent,
        FutListComponent,
        FutAddCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
