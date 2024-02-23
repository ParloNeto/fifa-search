import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../routing.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DescriptionPlayerComponent } from './components/description-player/description-player.component';
import { InformationButtonsComponent } from './components/information-buttons/information-buttons.component';
import { DetailsComponent } from './details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
    imports: [CommonModule, RoutingModule, SharedModule, MaterialModule, DetailsComponent,
        DescriptionPlayerComponent,
        InformationButtonsComponent,
        CardDetailsComponent],
})
export class DetailsModule {}
