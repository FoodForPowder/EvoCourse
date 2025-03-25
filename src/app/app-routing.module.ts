import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './item/list/list.component';
import { DetailsComponent } from './item/details/details.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Контакты',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'О нас',
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    path: 'item',
    component: ItemListComponent,
    title: 'Каталог',
  },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
