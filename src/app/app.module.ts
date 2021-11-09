import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MbsUpperCasePipe } from './pipes/MbsUpperCase.pipe';
import { MbsConcatPipe } from './pipes/MbsConcat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MbsConcatPipe,
    MbsUpperCasePipe // pipe should be declared before you using it.
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule, AppRoutingModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
