import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenReaderPageRoutingModule } from './screen-reader-routing.module';

import { ScreenReaderPage } from './screen-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenReaderPageRoutingModule
  ],
  declarations: [ScreenReaderPage]
})
export class ScreenReaderPageModule {}
