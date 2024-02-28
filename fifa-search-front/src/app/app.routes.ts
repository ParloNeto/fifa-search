import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    title: 'Página Inicial - FUT SEARCH',
    loadChildren: () =>
      import('./pages/pages.routes').then((p) => p.PAGES_ROUTES),
  },
  {
    path: '**',
    title: 'Página não encontrada - FUT SEARCH',
    component: NotFoundComponent,
  },
];
