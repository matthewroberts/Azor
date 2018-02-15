import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule, enableProdMode, Injectable, Injector } from '@angular/core';  //enableProdMode : make development faster
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwingModule } from 'angular2-swing';

import { MODULES, PROVIDERS, NATIVES  } from './app.imports';

import { Pro } from '@ionic/pro';

// this is the magic wand
enableProdMode();

Pro.init('dcd3fc2a', {
  appVersion: '0.1.0'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    //IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

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
    IonicErrorHandler,
  ]
})
export class AppModule {}



