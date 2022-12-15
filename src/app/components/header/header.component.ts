import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { PRODUCTS } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartNumber: number = 0;
  products = PRODUCTS;
  searchString = "";
  categories: string[] = []
  cartItems: CartItem[] = new Array();
  total: number = 0;
  constructor(private cartService: CartService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.cartService.getCartNumber().subscribe(data => {
      this.cartNumber = data;
      this.total = this.cartService.total();
    })
    this.cartService.getItems().subscribe(data => {
      this.cartItems = data;
    })
    this.categories = this.productService.findAllCategories()

  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices;
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0;
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity;
    });

    return total;
  }

}
