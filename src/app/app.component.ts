import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AppMaincontentComponent } from "./components/app-maincontent/app-maincontent.component";
import { DirectivesComponent } from "./components/directives/directives.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, AppMaincontentComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pryecto_angular_1';
}
