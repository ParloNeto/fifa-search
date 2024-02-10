import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { RoutingModule } from './routing.module';

// Shared
import { SharedModule } from '../shared/shared.module';

// Pages Module
import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';

// Material
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule,
    HomeModule,
    DetailsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class PagesModule {}
