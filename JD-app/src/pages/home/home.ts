import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

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

    goSearch(){
        this.navCtrl.push(SearchPage)
    }
}
