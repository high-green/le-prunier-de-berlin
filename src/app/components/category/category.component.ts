import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Product[] = new Array()
  category: string = "";
  recentProducts: Product[] = []
  categories: string[] = []
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let category: string = params["category"];
      this.category = category;
      if (this.category == "") {
        this.router.navigate(["/"]);
      }
      this.products = this.productService.findByCategory(this.category);
      this.categories = this.productService.findAllCategories()
      this.recentProducts = this.productService.findRandom(3)
    })
  }

  setCategory(category: string) {
    this.products = this.productService.findByCategory(category.toLowerCase())
  }
}
