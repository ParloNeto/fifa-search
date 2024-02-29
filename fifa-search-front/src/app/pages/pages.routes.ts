import { Routes } from '@angular/router';
import { AddCardComponent } from './create-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((p) => p.HomeComponent),
  },
  {
    path: 'details/:id',
    title: 'Ver detalhes do jogador - FUT SEARCH',
    loadComponent: () => import('./details/details.component').then((p) => p.DetailsComponent),
  },
  {
    path: 'create-card',
    title: 'Criar card - FUT SEARCH',
    loadComponent: () => import('./create-card/add-card.component').then((p) => p.AddCardComponent),
  },
];
