import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FabPage } from './fab';

@NgModule({
  declarations: [
    FabPage,
  ],
  imports: [
    IonicPageModule.forChild(FabPage),
  ],
  exports: [
    FabPage
  ]
})
export class FabPageModule {}
