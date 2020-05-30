import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(private http: HttpService) { }

  orderList = []

  ngOnInit() {

    this.http.get(`${environment.apiUrl}order`).subscribe(res => {
      console.log(res)
      this.orderList = res
    })
  }

}
