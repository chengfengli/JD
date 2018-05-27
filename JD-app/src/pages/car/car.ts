import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-car',
    templateUrl: 'car.html',
})
export class CarPage {
    cartList = [];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        for(let i=0;i<20;i++){
            this.cartList.push(i);
        }
    }

}
