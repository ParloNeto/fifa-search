import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fut-go-back-button',
  template: `
    <div >
      <button class="btn__add__player go__back" [routerLink]="['']">
        <mat-icon>forward</mat-icon>
        Voltar
      </button>
    </div>
  `,
  standalone: true,
  imports: [RouterModule, MatIconModule]
})
export class FutGoBackButtonComponent {}
