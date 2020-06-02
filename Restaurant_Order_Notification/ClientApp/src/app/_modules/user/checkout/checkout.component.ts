import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
import { IOrderItem } from 'src/app/_models/OrderItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _cart: CartService) { }
  orders: IOrderItem[] = []
  cartTotal: number

  ngOnInit() {

    this._cart.cartItems.subscribe(res => {
      this.orders = res;
      this.cartTotal = (res.map(x => x.subTotal)).reduce((a, b) => Number(a) + Number(b), 0)
    })
  }

}
