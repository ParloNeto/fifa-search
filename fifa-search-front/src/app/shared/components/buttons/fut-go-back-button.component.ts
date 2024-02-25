import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [RouterModule, MatIconModule, MatButtonModule]
})
export class FutGoBackButtonComponent {}
