import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  currentProducts: Product[] = []
  recentProducts: Product[] = []
  categories: string[] = []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.findAll()
    this.categories = this.productService.findAllCategories()
    this.recentProducts = this.productService.findRandom(3)
  }

  setCategory(category: string) {
    this.products = this.productService.findByCategory(category.toLowerCase())
  }
}
