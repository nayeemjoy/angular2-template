import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {IProduct} from './product';
@Component({
	templateUrl :
	"app/products/product-detail.component.html",
    // styleUrls: ['app/products/product-list.component.css'],
    // pipes : [ProductFilterPipe],
    // directives : [StarComponent]
})

export class ProductDetailComponent{
   pageTitle : string = 'Product Detail';

   constructor(private _routeParams : RouteParams, private _router : Router){
       let id = +this._routeParams.get('id');
       this.pageTitle += `:${id}`;
   }

   onBack():void{
       this._router.navigate(['Products']);
   }
}