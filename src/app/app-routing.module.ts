import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModule } from './page/page.module';

const routes: Routes = [
  {
    path: '/item',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
