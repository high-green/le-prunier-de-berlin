import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: Product[] = []
  nutritionProducts: Product[] = []
  fruitProducts: Product[] = []
  fruitJuiceProducts: Product[] = []

  bestSeller: Product[] = []
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.allProducts = this.productService.findAll()
    this.nutritionProducts = this.productService.findByCategory("nutrition")
    this.fruitProducts = this.productService.findByCategory("fruit")
    this.fruitJuiceProducts = this.productService.findByCategory("fruit-juice")

    this.bestSeller = this.productService.findRandom(5)
  }
}
