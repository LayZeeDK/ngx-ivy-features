import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';
import { componentFeatures, fromRoute, fromRouteParams } from '../features';
import { products } from '../products';

@Component({
  selector: 'ivy-product-details',
  templateUrl: './product-details.component.html',
})
@componentFeatures([
  fromRoute({ paramMap: 'params$' }),
  fromRouteParams({ productId: 'productId$' }),
])
export class IvyProductDetailsComponent implements OnInit {
  params$: Observable<ParamMap>;
  product;
  productId$: Observable<string>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    // this.params$.subscribe(params => {
    //   this.product = products[+params.get('productId')];
    // });
    this.productId$.subscribe(productId => {
      this.product = products[+productId];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
