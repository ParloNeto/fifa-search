import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAddCardComponent } from '../shared/fut-add-card/details-add-card/details-add-card.component';

//Components
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  
    },
    {
      path: 'addcard',
      component:  DetailsAddCardComponent,
      loadChildren: () => import('../shared/fut-add-card/card.module').then(p => p.CardModule)
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
