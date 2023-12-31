import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-fut-add-card-button',
  standalone: true,
  template: `
    <div class="addPlayer">
      <button mat-raised-button [routerLink]="['create-card']">
        <mat-icon>add_box</mat-icon>
        Adicionar Jogador
      </button>
    </div>
  `,
  imports: [RouterModule, MaterialModule],
})
export class FutAddCardComponent {}
