import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fut-add-card-button',
  standalone: true,
  template: `
    <button color="primary" mat-flat-button [routerLink]="['create-card']">
      <mat-icon>add_box</mat-icon>
      Adicionar Jogador
    </button>
  `,
  imports: [RouterModule, MatIconModule, MatButtonModule],
})
export class FutAddCardComponent {}
