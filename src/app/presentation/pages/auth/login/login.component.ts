import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//primeng
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  fb: FormBuilder = inject(FormBuilder);
  private router = inject(Router);

  formLogin = this.fb.group({
    'email':['', Validators.email],
    'password':['', Validators.maxLength(6)]
  });

  handleLogin(): void {
    const {email, password} = this.formLogin.value

    //colocar mensaje de la validacion
    //if(!email){
      //return;
    //}

    //colocar mensaje de la validacion
    //if(!password){
      //return;
    //}

    console.log(email, password)
    this.router.navigate(["dashboard"])

  }

}
