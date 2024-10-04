import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [CommonModule, MenuModule, BadgeModule, AccordionModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css'
})
export class SidenavigationComponent {

  listMenu:any[] = [{ label:"Ventas", code:"Vendidos" }];

  ngOnInit(): void {
    
  }
}
