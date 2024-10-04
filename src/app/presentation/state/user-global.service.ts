import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {

  public user = {
    username:"",
    userId:"",
    email:"",
    login:false
  };

  constructor() { }

  public setUser = (data:any) => {
    this.user = data;
  }

  public setUserEpmty = () => {
    this.user = { 
      username:"",
      userId:"",
      email:"",
      login:false
    };
  }

}
