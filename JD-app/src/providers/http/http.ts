import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

    //服务端接口
    private apiURL = 'http://192.168.1.102:8080/JD/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(public http: Http) {
        
    }

    // 对参数进行编码
    private encode(params) {
        var str = '';
        if (params) {
          for (var key in params) {
            if (params.hasOwnProperty(key)) {
            var value = params[key];
            str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        }
        str = '?' + str.substring(0, str.length - 1);
        }
        return str;
    }

    //合并两个json对象
    private jsonMerge(json1,json2){
        for(let key in json2){
        json1[key] = json2[key];
        }
        return json1;
    }

    post(option,success,error?){
        let old_option = {url:'',params:null,loader:false};
        old_option = this.jsonMerge(old_option,option);
        this.http.post(this.apiURL+option.url,JSON.stringify(option.params),{headers:this.headers}).subscribe(res=>{
            success(JSON.parse(res['_body']));
        },err=>{
            if(error){
                error(err);
            }
        })
    }

    get(option,success,error?){
        let old_option = {url:'',params:null,loader:false};
        old_option = this.jsonMerge(old_option,option);
        // let loading = this.loadingCtrl.create({});
        //   if (old_option.loader) {
        //     loading.present();
        // }
        this.http.get(this.apiURL+option.url+this.encode(option.params)).subscribe(res=>{
            if (old_option.loader) {
                // loading.dismiss();
            }
            success(JSON.parse(res['_body']));
        },err=>{
            if (old_option.loader) {
                // loading.dismiss();
            }
        //   this.handleError(err);
            if(error){
                error(err);
            }
        })
    }
}
