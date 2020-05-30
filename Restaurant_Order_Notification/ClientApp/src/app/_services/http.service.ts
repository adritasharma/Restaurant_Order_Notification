import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public _http: HttpClient) { }

  get(url: string): Observable<any> {
    return this._http.get(url)
  }

  post(url: string, resource, headers?:any): Observable<any> {
    return this._http.post(url, resource,headers)
  }

}
