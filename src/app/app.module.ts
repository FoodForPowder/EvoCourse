import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonPlaceholderService } from './services/json-placeholder.service';
import { AddIdInterceptor } from './interceptors/add-id.interceptor';
import { ResponseLogInterceptor } from './interceptors/response-log.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    JsonPlaceholderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddIdInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseLogInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
