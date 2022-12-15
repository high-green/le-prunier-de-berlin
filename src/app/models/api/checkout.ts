import { ShippingDetails } from "./shippingDetails";
import { Cart } from "./cart";

export class Checkout {
    shippingDetails: ShippingDetails = new ShippingDetails()
    cart: Cart = new Cart()
}