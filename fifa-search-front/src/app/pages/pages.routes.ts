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
    title: 'Ver detalhes do jogador - FUT SEARCH',
    component: DetailsComponent,
  },
  {
    path: 'create-card',
    title: 'Criar card - FUT SEARCH',
    component: AddCardComponent,
  },
];
