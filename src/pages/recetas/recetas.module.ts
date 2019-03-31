import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecetasPage } from './recetas';

@NgModule({
  declarations: [
    RecetasPage,
  ],
  imports: [
    IonicPageModule.forChild(RecetasPage),
  ],
})
export class RecetasPageModule {}
