import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  constructor(private http: HttpService) { }

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

  quantityClick(index, type) {

    let quantity = this.menuList[index].quantity ? Number(this.menuList[index].quantity) : 0

    if (type == 'add') {
      quantity = quantity + 1
    } else {
      if (quantity > 0) {
        quantity = quantity - 1
      }
    }

    this.menuList[index].quantity = quantity

  }


}
