import { NgModule } from '@angular/core';
import { FutSearchComponent } from './components/fut-search/fut-search.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FutAddCardComponent } from 'src/app/shared/components/buttons/fut-add-card-button.component';
import { RoutingModule } from '../routing.module';
import { FutListComponent } from './components/fut-list/fut-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, FutSearchComponent, FutListComponent],
  imports: [
    CommonModule,
    FutAddCardComponent,
    MaterialModule,
    SharedModule,
    RoutingModule,
    FutAddCardComponent
  ],
  exports: [FutListComponent]
})
export class HomeModule {}
