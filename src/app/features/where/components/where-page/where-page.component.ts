import { Component } from '@angular/core';
import { HeroComponent } from "../../../../shared/components/hero/hero.component";

@Component({
  selector: 'app-where-page',
  imports: [HeroComponent],
  templateUrl: './where-page.component.html',
  styleUrl: './where-page.component.css'
})
export class WherePageComponent {

  constructor() {
  }
}
