import { Component } from '@angular/core';
import { diffDays } from '@formkit/tempo'

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  today: Date
  weddingDate: Date
  remainingDays: number

  constructor() {
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.weddingDate = new Date(2025, 5, 6);
    this.remainingDays = diffDays(this.weddingDate, this.today);
  }
  
}
