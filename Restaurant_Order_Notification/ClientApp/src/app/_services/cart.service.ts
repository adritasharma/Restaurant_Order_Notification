import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMenu } from '../_models/Menu';
import { IOrderItem } from '../_models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: BehaviorSubject<IOrderItem[]> = new BehaviorSubject<IOrderItem[]>([]);

  public cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  cartList = []

  constructor() { }

  changeCart(item: IOrderItem, type) {
    let index = this.cartList.findIndex(x => x.menuId == item.menuId);

    console.log(item)
    if (type == 'add') {
      if (index == -1) {
        item.quantity = 1
        item.subTotal = item.quantity * item.price
        this.cartList.push(item);
      } else {
        let cartItem = this.cartList.find(x => x.menuId == item.menuId)
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.subTotal = cartItem.quantity * cartItem.price

      }
    } else {
      let cartItem = this.cartList.find(x => x.menuId == item.menuId)
      if (cartItem.quantity == 1) {
        this.cartList.splice(index, 1)
      }
      cartItem.quantity = cartItem.quantity - 1;
      cartItem.subTotal = cartItem.quantity * cartItem.price
    }
    this.cartItems.next(this.cartList);

    console.log(this.cartList)
    this.cartCount.next((this.cartList.map(x => x.quantity)).reduce((a, b) => Number(a) + Number(b), 0))

  }



}
