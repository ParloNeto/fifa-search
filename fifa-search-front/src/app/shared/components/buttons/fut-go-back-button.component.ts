import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-fut-go-back-button',
  template: `
    <div id="#buttonGoBack">
      <button [routerLink]="['']" mat-fab extended color="warn">
        <mat-icon>forward</mat-icon>
        Voltar
      </button>
    </div>
  `,
  standalone: true,
  imports: [RouterModule, MaterialModule]
})
export class FutGoBackButtonComponent {}
