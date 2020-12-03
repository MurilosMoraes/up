import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirijaPageRoutingModule } from './dirija-routing.module';

import { DirijaPage } from './dirija.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirijaPageRoutingModule
  ],
  declarations: [DirijaPage]
})
export class DirijaPageModule {}
