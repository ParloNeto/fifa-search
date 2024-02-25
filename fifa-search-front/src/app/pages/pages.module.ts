import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { RoutingModule } from './routing.module';

// Shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule {}
