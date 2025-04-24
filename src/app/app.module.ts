import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvoLibModule } from 'projects/evo-lib/src/public-api';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EvoLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
