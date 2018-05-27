import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { PdetailsPage } from '../pdetails/pdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    porducts=[];
    porducts_width="0px";

    constructor(public navCtrl: NavController) {
        for(let i=0;i<10;i++){
            this.porducts.push({name:'商品'+(i+1),img:'./assets/imgs/0'+i+'.jpg'});
        }
        this.porducts_width = this.porducts.length*75+'px';
    }

    //跳转到搜索页面
    goSearch(){
        this.navCtrl.push(SearchPage)
    }

    //跳转到商品详情页面
    pdetail(){
        this.navCtrl.push(PdetailsPage);
    }
}
