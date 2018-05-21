import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidateCodePage } from '../validate-code/validate-code';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    next(){
        this.navCtrl.push(ValidateCodePage)
    }

}
