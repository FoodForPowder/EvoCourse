import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostResolveResolver } from './resolves/post-resolve.resolver';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    resolve: [PostResolveResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
