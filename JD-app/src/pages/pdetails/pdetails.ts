import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarPage } from '../car/car';

/**
 * 商品详情
 */

@Component({
  selector: 'page-pdetails',
  templateUrl: 'pdetails.html',
})
export class PdetailsPage {
    p_info = 'img';
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PdetailsPage');
    }

    // 跳转到购物车
    goCart(){
        this.navCtrl.push(CarPage)
    }

}
