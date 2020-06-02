import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/_services/cart.service';
import { IMenu } from 'src/app/_models/Menu';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  constructor(private http: HttpService, private _cart:CartService) { }

  menuList:IMenu[] = []

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



}
