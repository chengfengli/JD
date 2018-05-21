import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarPage } from '../pages/car/car';
import { TypePage } from '../pages/type/type';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ValidateCodePage } from '../pages/validate-code/validate-code';
import { RegisterPwdPage } from '../pages/register-pwd/register-pwd';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    CarPage,
    TypePage,
    LoginPage,
    RegisterPage,
    ValidateCodePage,
    RegisterPwdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: 'true',
        backButtonText: '返回',
        iconMode: 'ios',
        mode: 'ios',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    CarPage,
    TypePage,
    LoginPage,
    RegisterPage,
    ValidateCodePage,
    RegisterPwdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
