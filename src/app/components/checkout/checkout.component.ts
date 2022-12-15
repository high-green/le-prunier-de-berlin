import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/api/cart';
import { Checkout } from 'src/app/models/api/checkout';
import { ShippingDetails } from 'src/app/models/api/shippingDetails';
import { CartItem } from 'src/app/models/cart-item';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem as ApiCartItem } from '../../models/api/cartItem'
import Swal from 'sweetalert2'
import { Quantity } from 'src/app/models/quantity';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isLoading = false
  buttonMsg = 'Place Order'
  paymentOptionList = ['Bitcoin', 'Cashapp ', 'Apple Pay', 'Bank Transfer']
  contactOptionList = ['Phone', 'SMS', 'Email', 'Whatsapp', 'Telegram']
  countryList = ['Germany', 'English', 'France']
  items: CartItem[] = new Array()
  shipping: ShippingDetails = new ShippingDetails()
  constructor(
    private cartService: CartService,
    private apiService: ApiService,
  ) {
    this.shipping.paymentOption = this.paymentOptionList[0]
    this.shipping.contactOption = this.contactOptionList[0]
    this.shipping.country = this.countryList[0]
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data
    })
  }

  total() {
    return this.cartService.total()
  }

  submitTest() {
    this.isLoading = true
    this.shipping = new ShippingDetails()
    this.cartService.purge()
    Swal.fire({
      title: 'Thanks!',
      text:
        'Thank you! Your order has been received. We will contact you as soon as possible',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#7cca31',
    })
    this.isLoading = false
    this.buttonMsg = 'Place Order'
  }


  submit() {
    this.isLoading = true
    this.buttonMsg = 'Loading...'
    if (this.items.length < 1) {
      Swal.fire({
        title: 'Oops!',
        text:
          'Your cart is empty try adding some items to your cart before trying to checkout',
        icon: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#7cca31',
      })
      this.isLoading = false
      this.buttonMsg = 'Place Order'
    } else {
      let checkout = new Checkout()
      let cart = new Cart()
      this.items.forEach((value: CartItem) => {
        let apiCartItem: ApiCartItem = new ApiCartItem()
        apiCartItem.productName = value.product.name
        apiCartItem.productQuantities = this.formatQuantity(value)
        apiCartItem.productTotal = this.itemTotal(value)
        cart.cartItems.push(apiCartItem)
      })
      cart.grandTotal = this.cartService.total()
      checkout.cart = cart
      checkout.shippingDetails = this.shipping
      this.apiService.checkout(checkout).subscribe(
        (data: any) => {
          this.isLoading = true
          this.shipping = new ShippingDetails()
          this.cartService.purge()
          Swal.fire({
            title: 'Thanks!',
            text:
              'Thank you! Your order has been received. We will contact you as soon as possible',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#7cca31',
          })
          this.isLoading = false
          this.buttonMsg = 'Place Order'
        },
        (err: HttpErrorResponse) => {
          this.isLoading = false
          Swal.fire({
            title: 'Error!',
            text:
              'Unable to place order. Make sure you are connected to the internet',
            icon: 'warning',
            confirmButtonText: 'Ok got it!',
            confirmButtonColor: '#7cca31',
          })
          this.buttonMsg = 'Place Order'
        },
      )
    }
  }

  private formatQuantity(item: CartItem): string {
    let quantities = item.quantities

    let all: string = ''
    for (var i = 0; i < quantities.length; i++) {
      if (i == 0) all = quantities[i].quantity + ' - ' + quantities[i].unit
      else
        all = all + ' & ' + quantities[i].quantity + ' - ' + quantities[i].unit
    }
    return all
  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity
    })

    return total
  }
}
