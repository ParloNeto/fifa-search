import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  template: `

<mat-sidenav-container autosize>
  <mat-sidenav class="slideInLeft" mode="over" opened="false">
    <img
      src="assets/images/logo-fut-search.png"
      alt="Logo Fut Search Sidenav"
    />
    <span class="entry">
      <app-fut-add-card-button></app-fut-add-card-button>
    </span>
  </mat-sidenav>
  <mat-sidenav-content>
    <button
      id="button-menu-sidebar"
      (click)="sidenav.toggle()"
      mat-icon-button
      aria-label="Menu icon"
    >
      <mat-icon>menu</mat-icon>
    </button>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>


  
  
  `,
  styleUrl: './app.component.scss'


})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
}
