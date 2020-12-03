import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvidePageRoutingModule } from './convide-routing.module';

import { ConvidePage } from './convide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvidePageRoutingModule
  ],
  declarations: [ConvidePage]
})
export class ConvidePageModule {}
