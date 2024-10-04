import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//components
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidenavigationComponent } from '../../components/sidenavigation/sidenavigation.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidenavigationComponent, NavbarComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
