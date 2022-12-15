import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { UNITS } from 'src/app/models/price';
import { Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product()
  relatedProducts: Product[] = []
  category: string = "";
  units = UNITS;
  chosenUnit: string = UNITS[0].name;
  quant: number = 1;
  keyUp = ""

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.category = params["category"];
      this.product = this.productService.find(id)
      this.chosenUnit = this.product.prices[0].unit;
      this.relatedProducts = this.productService.findRandomAndExcludeOne(5, id);
      // if (!this.product) {
      //   this.router.navigate(["/"]);
      // }
    })
    this.titleService.setTitle("Buy " + this.product.name + " online")
  }

  addToCart() {
    if (this.keyUp)
      this.quant = parseFloat(this.keyUp);
    if (this.chosenUnit && Number.isFinite(this.quant) && !(this.quant <= 0)) {
      let item: Item = new Item();
      let quant: Quantity = new Quantity();
      quant.quantity = this.quant;
      quant.unit = this.chosenUnit;
      item.product = this.product;
      item.quantity = quant;
      this.cartService.add(item);
    }
    else {
      this.quant = 1;
      Swal.fire({
        title: 'Bad Quantity',
        text: 'Please enter a non zero quantity value to proceed',
        icon: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#7cca31'
      })
    }
  }

  addQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    this.quant += 1;
  }

  reduceQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    if ((this.quant - 1) <= 0)
      this.quant = 0;
    else
      this.quant -= 1;
  }

  onQuantityChange(event: any) {
    this.keyUp = event.target?.value
  }
}
