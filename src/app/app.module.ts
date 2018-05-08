<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { LayoutModule } from '@app/layout/layout.module'

import { AppComponent } from '@app/app.component'
import { PagesComponent } from '@app/pages/pages.component'
import { AppRoutingModule } from '@app/app-routing.module'
import { PagesRoutingModule } from '@app/pages/pages-routing.module'
import { AuthModule } from '@app/auth/auth.module'

import { reducers, metaReducers } from '@core/store'
import { environment } from '@environments/environment'

@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    CommonModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    AppRoutingModule,
    PagesRoutingModule,

    AuthModule,
  ],
  declarations: [
    PagesComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ],
>>>>>>> 183aba0c0ee4d45a2f62a454bb51e20e91f26a24
})
export class AppModule { }
