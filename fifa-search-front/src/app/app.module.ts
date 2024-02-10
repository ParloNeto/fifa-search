import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Modules
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { FutAddCardComponent } from './shared/components/buttons/fut-add-card-button.component';




//Components

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    FutAddCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
