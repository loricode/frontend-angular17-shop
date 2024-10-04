import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, AvatarModule, ButtonModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
    private router = inject(Router);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Angel Campillo',
                items: [
                    {
                        label: 'Salir',
                        icon: 'pi pi-sign-out',
                        command: () => {
                           console.log("clic")
                           this.router.navigate(['/auth/login'])
                        }
                    }
                ]
            }
        ];
    }
  
}
