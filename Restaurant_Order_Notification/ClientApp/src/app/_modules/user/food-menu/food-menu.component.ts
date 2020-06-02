import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  constructor(private http: HttpService, private _cart:CartService) { }

  menuList = []

  ngOnInit() {

    this.http.get(`${environment.apiUrl}menu`).subscribe(res => {

      res = res.map(item => ({
        ...item,
        quantity: null
      }))

      this.menuList = res;
      console.log(res)

    })
  }

  quantityChange(item, type) {

    let quantity = item.quantity ? Number(item.quantity) : 0

    if (type == 'add') {
      quantity = quantity + 1
    } else if (type == 'remove'){
      if (quantity > 0) {
        quantity = quantity - 1
      }
    }

    item.quantity = quantity

     this._cart.changeCart(item,type)

  }


}
