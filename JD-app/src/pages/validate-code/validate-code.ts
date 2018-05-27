import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPwdPage } from '../register-pwd/register-pwd';

@Component({
    selector: 'page-validate-code',
    templateUrl: 'validate-code.html',
})
export class ValidateCodePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ValidateCodePage');
    }
    next(){
        this.navCtrl.push(RegisterPwdPage)
    }

}
