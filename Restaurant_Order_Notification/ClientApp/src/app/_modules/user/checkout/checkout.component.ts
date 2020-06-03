import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
import { IOrderItem } from 'src/app/_models/OrderItem';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _cart: CartService, private _http:HttpService) { }
  orders: IOrderItem[] = []
  cartTotal: number

  ngOnInit() {

    this._cart.cartItems.subscribe(res => {
      this.orders = res;
      this.cartTotal = (res.map(x => x.subTotal)).reduce((a, b) => Number(a) + Number(b), 0)
    })
  }

  placeOrder(){
    let payload = {
      CustomerId : 1,
      OrderItems : this.orders
    }
    this._http.post(`${environment.apiUrl}Order`, payload).subscribe(res => {
      console.log(res)
    })
  }

}
