import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './posts/post/post.component';
import { RoleGuard } from './guards/role.guard';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'post',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [RoleGuard],
  },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
