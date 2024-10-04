import { Component, inject } from '@angular/core';

//primeng
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { ShopNavbarComponent } from '../../components/shop-navbar/shop-navbar.component';
import { ShopFooterComponent } from '../../components/shop-footer/shop-footer.component';

//data
import { ProductService } from '../../../data/repositories/product/product.service';

//interfaces
import { Product, DetailProduct } from '../../../domain/interfaces/product';
import { CurrencyPipe } from '@angular/common';

import { SecurityService } from '../../../core/services/security/security.service';
import { UserGlobalService } from '../../state/user-global.service';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopNavbarComponent, CurrencyPipe, ShopFooterComponent, DialogModule, ButtonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  private productService = inject(ProductService);
  private securityService = inject(SecurityService);
  private userGlobalService = inject(UserGlobalService);

  public products: Array<Product> = [];
  public visible = false;

  public product:any = {
   id:'',
   image:'',
   name:'',
   price:'',
   height: 0,
   baseExperience:0,
   types: '',
   weight: 0
  };

  ngOnInit(): void {

    this.securityService.currentUser().subscribe({
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

      },
      error: (err) => {
        console.log(err)
        this.userGlobalService.setUserEpmty();
        window.localStorage.removeItem("tokenSecurity");
      },
    })

    this.listProducts();

  }

  private listProducts = () => {

    this.productService.getListProducts().subscribe({
      next: (data) => {
        this.products = data.results;
      } 
    })

  } 

  public handleModalDetail = () => {
    this.visible = !this.visible
  } 

  public detailProduct = (item:Product) => {
    
    this.handleModalDetail();

    this.productService.getProduct(item.id).subscribe({
      next: (data) => {
        
        this.product = {
          ...data,
          ...item,
          types: data.types.map(item => ( item.type.name )).toString()
        }
      }
    });

  }


  


}
