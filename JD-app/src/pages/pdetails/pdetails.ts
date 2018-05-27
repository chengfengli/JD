import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

}
