import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAddCardComponent } from './shared/fut-add-card/details-add-card/details-add-card.component';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
