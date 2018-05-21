import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-register-pwd',
    templateUrl: 'register-pwd.html',
})
export class RegisterPwdPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPwdPage');
    }

}
