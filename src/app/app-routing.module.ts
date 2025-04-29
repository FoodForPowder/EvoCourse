import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'authorization',
    component: AuthComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'recipes/:id',
    component: PostComponent,
  },
  {
    path: 'access-denied',
    component: ErrorComponent,
    data: {
      statusCode: 403,
      title: 'Доступ запрещен',
      message: 'У вас нет прав на просмотр этого раздела',
    },
  },

  {
    path: 'not-found',
    component: ErrorComponent,
    data: {
      statusCode: 404,
      title: 'Страница не найдена',
      message: 'К сожалению, мы не смогли найти страницу, которую вы ищете',
    },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
