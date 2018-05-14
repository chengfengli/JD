import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-type',
  templateUrl: 'type.html',
})
export class TypePage {
    active=1;
    types=[];
    recList=[];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        for(let i=0;i<20;i++){
            this.types.push({typeName:'分类'+(i+1),typeId:(i+1)});
        }
        for(let i=0;i<10;i++){
            this.recList.push({name:'商品'+(i+1),img:'../../assets/imgs/0'+i+'.jpg'});
        }
    }

    getListByType(typeId){
        this.active = typeId;
    }

}
