import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//primeng
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

//services
import { SecurityService } from '../../../core/services/security/security.service';

//state
import { UserGlobalService } from '../../state/user-global.service';

@Component({
  selector: 'app-shop-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, DialogModule, InputTextModule,  AvatarModule, ButtonModule, MenuModule],
  templateUrl: './shop-navbar.component.html',
  styleUrl: './shop-navbar.component.css'
})
export class ShopNavbarComponent {

  public userGlobalService = inject(UserGlobalService);
  
  private fb = inject(FormBuilder);
  private securityService = inject(SecurityService);

  public visibleRegister = false;
  public visibleLogin = false;

  public authRegister =  this.fb.group({
    username:['', [ Validators.required ]],
    email:['', [ Validators.required, Validators.email ]],
    password:['', [ Validators.required ]],
    repeatPassword:['', [ Validators.required ]]
  });

  public authLogin =  this.fb.group({
    email:['ajcampillo07@gmail.com', [ Validators.required, Validators.email ]],
    password:['123456', [ Validators.required, Validators.minLength(6) ]]
  });

  public openModalLogin = () => {
    this.visibleLogin = true;
  }

  public openModalRegister = () => {
    this.visibleRegister = true;
  }

  public submitLogin = () => {

    const { email, password } = this.authLogin.value;

    if(!email) return;

    if(!password) return;

     this.handleLogin(email, password);
    
  }

  private handleLogin = (email:string, password:string) => {
    this.securityService.loginPortal(email, password).subscribe({
      next: ( value ) => {

        const { email, userId, token, username } = value;

        const objUser = {
          email,
          userId,
          username,
          login: true 
        }; 

        this.userGlobalService.setUser(objUser);

        window.localStorage.setItem("tokenSecurity", token);
        
        this.visibleLogin = false;
        this.authLogin.reset();

      },
      error: (err) => {
        this.closeSesion();
      },

    });
  }

  public submitRegister = () => {

    const obj = this.authRegister.value;

    this.securityService.registerPortal(obj).subscribe({
      next: ( value ) => {

        const { email, userId, token, username } = value;

        const objUser = {
          email,
          userId,
          username,
          login: true 
        }; 

        this.userGlobalService.setUser(objUser);

        window.localStorage.setItem("tokenSecurity", token);
        
        this.visibleRegister = false;
        this.authRegister.reset();

      },
      error: (err) => {
        this.closeSesion();
      },
    });

  }

  public closeSesion = () => {
    this.userGlobalService.setUserEpmty();
    window.localStorage.removeItem("tokenSecurity");
  }

}
