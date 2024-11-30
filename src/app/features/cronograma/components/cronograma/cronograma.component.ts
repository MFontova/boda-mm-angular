import { Component } from '@angular/core';
import { HeroComponent } from "../../../../shared/components/hero/hero.component";

@Component({
  selector: 'app-cronograma',
  imports: [HeroComponent],
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.css'
})
export class CronogramaComponent {
  schedule: {item: string, hour: string} [] = [
    {
      item: 'Arribada a Els Comdals',
      hour: '18:00h',
    },
    {
      item: 'Inici de la cerimònia',
      hour: '18:30h',
    },
    {
      item: 'Aperitiu',
      hour: '19:30h'
    }
  ]
}
