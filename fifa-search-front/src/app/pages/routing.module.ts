import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from '../shared/fut-add-card/add-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
    },
  {
  path: 'test',
  component: LoginComponent,
  
  },
  {
    path: 'home',
    component: HomeComponent,
    
    },
  {
    path: 'details/:id',
    component: DetailsComponent
  
    },
    {
      path: 'addcard',
      component:  AddCardComponent,
      loadChildren: () => import('../shared/fut-add-card/card.module').then(p => p.CardModule)
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
