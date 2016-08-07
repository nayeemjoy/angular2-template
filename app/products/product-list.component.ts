import {Component, OnInit} from 'angular2/core';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';


import {IProduct} from './product';
@Component({
	selector : 'pm-products',
	templateUrl :
	"app/products/product-list.component.html",
    styleUrls: ['app/products/product-list.component.css'],
    pipes : [ProductFilterPipe],
    directives : [StarComponent]
})

export class ProductListComponent  implements OnInit{
   pageTitle : string = 'Product Lists';
   imageWidth : number = 50;
   imageHeight : number = 2;
   showImage : boolean = false;
   listFilter : string = "";
   errorMessage : any;
   products : IProduct[];
    constructor(private _productService: ProductService){
        // this._productService = _productService;
    }
    toggleImage() : void{
        this.showImage = ! this.showImage;
    };

    ngOnInit(): void{
        console.log('Product Component Initiated');
        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    };

    onRatingClicked(message : string) : void{
        this.pageTitle = "Product List : " + message;
    }
}