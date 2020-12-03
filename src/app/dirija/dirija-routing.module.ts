import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirijaPage } from './dirija.page';

const routes: Routes = [
  {
    path: '',
    component: DirijaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirijaPageRoutingModule {}
