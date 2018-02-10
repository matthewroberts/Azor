import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';  //enableProdMode : make development faster
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwingModule } from 'angular2-swing';

import { MODULES, PROVIDERS, NATIVES  } from './app.imports';

// this is the magic wand
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS,
    NATIVES,
  ]
})
export class AppModule {}

