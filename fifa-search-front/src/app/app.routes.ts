import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routes').then((p) => p.PAGES_ROUTES),
  },
];