import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [CountdownComponent, RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  img: string = "images/cascada.jpeg"
}
