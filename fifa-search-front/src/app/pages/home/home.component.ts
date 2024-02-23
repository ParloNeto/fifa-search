import { Component } from '@angular/core';
import { FutListComponent } from './components/fut-list/fut-list.component';
import { FutAddCardComponent } from '../../shared/components/buttons/fut-add-card-button.component';
import { FutHeaderComponent } from '../../shared/components/fut-header/fut-header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [FutHeaderComponent, FutAddCardComponent, FutListComponent]
})
export class HomeComponent {
  constructor() {}
}
