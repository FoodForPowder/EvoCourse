import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineComponent } from './inline/inline.component';

const routes: Routes = [{ component: InlineComponent, path: 'open-graph' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
