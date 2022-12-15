import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = new Array();

  constructor() {
    //Very important initialization since PRODUCTS is an array of objects that have been cast to type Product
    //Relying on this may cause runtime problems
    PRODUCTS.forEach((element: Product) => {
      let product: Product = new Product();
      product.id = element.id;
      product.name = element.name;
      product.category = element.category;
      product.photo = element.photo;
      product.prices = element.prices;
      product.stars = element.stars;
      product.additionalInfo = element.additionalInfo;
      product.description1 = element.description1;
      product.description2 = element.description2;
      this.products.push(product);
    });

    // array.sort((a,b) => a.title.rendered.localeCompare(b.title.rendered));
    this.products.sort((a, b) => a.name.localeCompare(b.name))
  }

  findAll(): Product[] {
    return this.products
  }

  findAllCategories() {
    let categories: string[] = []
    this.products.forEach(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category)
      }
    })
    return categories
  }

  slice(array: Product[], start: number, end: number) {
    let result = new Array()
    array.slice(start, end).forEach(value => result.push(value))
    return result;
  }

  find(id: string) {
    let i = this.getSelectedIndex(id)
    return i < 0 ? null : this.products[i];
  }

  getProductIndex(product: Product) {
    return this.getSelectedIndex(product.id)
  }

  findByCategory(category: string) {
    return this.products.filter(value => value.category.toLowerCase() === category.toLowerCase())
  }

  findRandomAndExcludeOne(maxNo: number, excludedId: string): Product[] {
    let total: number
    let copied: Map<number, number> = new Map<number, number>();
    let someProducts: Product[] = [];
    this.products.forEach((p: Product) => {
      someProducts.push(p);
    })
    //Remove product with provided id from products
    for (var j = 0; j < someProducts.length; j++) {
      if (excludedId === someProducts[j].id) {
        someProducts.splice(j, 1)
        break;
      }
    }
    total = someProducts.length;
    let randomProducts: Product[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * someProducts.length))
      if (!copied.has(index)) {
        randomProducts.push(someProducts[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProducts;
  }

  findRandom(maxNo: number) {
    let copied: Map<number, number> = new Map<number, number>();
    let total = this.products.length;
    let randomProducts: Product[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * this.products.length))
      if (!copied.has(index)) {
        randomProducts.push(this.products[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProducts;
  }

  search(id: string): Product[] {
    let found: Product[] = [];
    //Assuming all spaces are replaced by +
    let splits = id.split("+");
    for (var i = 0; i < this.products.length; i++) {
      for (var j = 0; j < splits.length; j++) {
        if (this.products[i].name.toLowerCase().includes(splits[j].toLowerCase()) || this.products[i].id.toLowerCase().includes(splits[j].toLowerCase())) {
          found.push(this.products[i])
          // break out of loop as soon as we get the first match
          break;
        }
      }
    }
    return found;
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
