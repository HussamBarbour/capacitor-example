import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenReaderPage } from './screen-reader.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenReaderPageRoutingModule {}
