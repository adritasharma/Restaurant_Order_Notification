import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  cartList = []

  constructor() { }

  changeCart(item: any, type) {

    console.log(item)
    if (type == 'add') {
      this.cartList.push(item);
    } else {
      let removeIndex = this.cartList.findIndex(x => x.menuId == item.menuId);
      this.cartList.splice(removeIndex, 1)
    }
    this.cartItems.next(this.cartList);

    console.log(this.cartList)
    this.cartCount.next(this.cartList.length)


  }

}
