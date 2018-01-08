
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthEffects, AuthService, reducer } from "gel-core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { StoreDevtools } from "@ngrx/store-devtools/src/devtools";

const firebaseConfig = {
  apiKey: "",
  authDomain: "abc.firebaseapp.com",
  databaseURL: "https://abc.firebaseio.com",
  projectId: "gel-cl",
  storageBucket: "abc.appspot.com",
  messageingSenderId: ""
};

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    StoreModule.forRoot({ auth: reducer }),
    EffectsModule.forRoot([EffectsModule]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule {}
