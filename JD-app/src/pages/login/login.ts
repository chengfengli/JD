import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController,private httpProvider:HttpProvider) {

    }

    loginFun(){
        this.httpProvider.post({url:'hello',params:{name:'list'}},(res)=>{

        });
    }

}
