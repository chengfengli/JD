import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})
export class SearchPage {
    flag = true;
    porducts=[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        for(let i=0;i<10;i++){
            this.porducts.push({name:'商品'+(i+1),img:'./assets/imgs/0'+i+'.jpg'});
        }
    }

    search(){
        this.flag = false;
    }

}
