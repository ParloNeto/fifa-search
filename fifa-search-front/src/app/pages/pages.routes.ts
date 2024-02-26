import { Routes } from '@angular/router';
import { AddCardComponent } from './create-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'create-card',
    component: AddCardComponent,
  },
];
