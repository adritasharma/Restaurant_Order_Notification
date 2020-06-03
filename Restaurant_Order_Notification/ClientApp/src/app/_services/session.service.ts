import { Injectable } from '@angular/core';
import { IUser, Role } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  storeLoginData(user: IUser) {
    localStorage.setItem("session_user", JSON.stringify(user))
  }

  getloggedInUserRole():Role{
    let user:IUser = JSON.parse(localStorage.getItem("session_user"));
    return user.Role;
  }

}
