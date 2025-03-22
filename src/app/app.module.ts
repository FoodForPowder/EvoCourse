import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFivePipe } from './pipes/add-five.pipe';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFivePipe,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
