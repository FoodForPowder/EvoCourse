import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './posts/post/post.component';
import { ErrorComponent } from './error/error.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { AdministratorComponent } from './administrator/administrator.component';
import { UsersComponent } from './administrator/users/users.component';
import { AdminPostsComponent } from './administrator/admin-posts/admin-posts.component';
import { UserComponent } from './administrator/users/user/user.component';
import { AdminGuard } from './guards/admin.guard';

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
  {
    path: 'recipes',
    component: PostsComponent,
  },
  {
    path: 'admin',
    component: AdministratorComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'recipes',
        component: AdminPostsComponent,
      },
    ],
  },
  {
    path: 'admin/recipes/:id',
    canActivate: [AdminGuard],
    component: CreatePostComponent,
  },
  {
    path: 'admin/users/:id',
    canActivate: [AdminGuard],
    component: UserComponent,
  },
  {
    path: 'create-recipe',
    canActivate: [UserGuardGuard],
    component: CreatePostComponent,
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
