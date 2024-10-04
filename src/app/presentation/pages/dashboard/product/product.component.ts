import { Component, inject } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

//components
import { CardContainerComponent } from '../../../components/card-container/card-container.component';

//services
import { SalesService } from '../../../../data/repositories/sales/sales.service';
import { SaleProduct } from '../../../../domain/interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardContainerComponent, TableModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  private salesService = inject(SalesService);

  products: SaleProduct[] = [];

  ngOnInit(): void {
    
    this.salesService.getSalesProducts().subscribe({
      next: (value) => {

        this.products = value;

      }
    })
    
  }

}
