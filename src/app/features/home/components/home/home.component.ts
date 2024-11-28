import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';
import { AtroposCardComponent } from "../atropos-card/atropos-card.component";

@Component({
  selector: 'app-home',
  imports: [CountdownComponent, RouterLink, AtroposCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  img: string = "images/cascada.jpeg"
}
