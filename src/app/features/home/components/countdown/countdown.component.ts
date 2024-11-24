import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  today: Date
  weddingDate: Date

  constructor() {
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.weddingDate = new Date(2025, 5, 6);
  }
  
}
