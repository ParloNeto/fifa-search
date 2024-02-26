import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {}
