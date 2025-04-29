import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { AuthState } from './store/auth.state';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { RolePipe } from './pipes/role.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { CarouselComponent } from './main/carousel/carousel.component';
import { BestPostsComponent } from './main/best-posts/best-posts.component';
import { LikedPostState } from './store/post.state';
import { BestCardComponent } from './best-card/best-card.component';
import { TasteBlockComponent } from './main/taste-block/taste-block.component';
import { AboutComponent } from './main/about/about.component';
import { MailingComponent } from './main/mailing/mailing.component';
import { NotifyState } from './store/notify.state';
import { NotifyComponent } from './main/notify/notify.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    RolePipe,
    RegistrationComponent,
    MainComponent,
    CarouselComponent,
    BestPostsComponent,
    BestCardComponent,
    TasteBlockComponent,
    AboutComponent,
    MailingComponent,
    NotifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([AuthState, LikedPostState, NotifyState]),
    NgxsStoragePluginModule.forRoot({
      key: ['AuthState', 'LikedPosts'],
    }),
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
