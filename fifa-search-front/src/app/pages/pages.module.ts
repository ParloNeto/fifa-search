import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { MaterialModule } from '../shared/material/material.module';
import { DescriptionPlayerComponent } from './details/description-player/description-player.component';
import { InformationButtonsComponent } from './details/information-buttons/information-buttons.component';
import { CardDetailsComponent } from './details/card-details/card-details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    DescriptionPlayerComponent,
    InformationButtonsComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
