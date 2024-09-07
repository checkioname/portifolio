import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { RoleCardComponent } from "./components/role-card/role-card.component";
import { PicturesComponent } from "./components/pictures/pictures.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { ListComponent } from "./components/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RoleCardComponent, PicturesComponent, AboutMeComponent, ContactMeComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}
