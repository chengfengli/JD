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
import { SearchPage } from '../pages/search/search';
import { PdetailsPage } from '../pages/pdetails/pdetails';

import { HttpModule } from '@angular/http';
import { HttpProvider } from '../providers/http/http';

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
    RegisterPwdPage,
    SearchPage,
    PdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: 'true',
        backButtonText: '',
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
    RegisterPwdPage,
    SearchPage,
    PdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
