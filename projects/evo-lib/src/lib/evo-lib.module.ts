import { NgModule } from '@angular/core';
import { EvoLibComponent } from './evo-lib.component';
import { LibTableComponent } from './lib-table/lib-table.component';



@NgModule({
  declarations: [
    EvoLibComponent,
    LibTableComponent
  ],
  imports: [
  ],
  exports: [
    EvoLibComponent,
    LibTableComponent
  ]
})
export class EvoLibModule { }
