import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fut-add-card-button',
  standalone: true,
  template: `
  <div class="position__btn__add__player">
  <button class="btn__add__player" [routerLink]="['create-card']">
      <mat-icon>add_box</mat-icon>
      Adicionar Jogador
    </button>
  </div>

  `,
  styles:
  `
  .position__btn__add__player {
    position: fixed;
    left: 61px;
    top: 61px;
  }

  `,
  imports: [RouterModule, MatIconModule],
})
export class FutAddCardComponent {}
