import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _cart:CartService) { }

  cartCount:number = null

  ngOnInit() {
    this._cart.cartCount.subscribe(res => {
      this.cartCount = res
    })
  }

}
