import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DetailsAddCardComponent } from '../shared/fut-add-card/details-add-card/details-add-card.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  providers: [
    DetailsAddCardComponent, 
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    
  ]
})
export class PagesModule { }
