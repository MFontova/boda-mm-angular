import { AfterViewInit, Component, ElementRef, QueryList, viewChild, ViewChildren } from '@angular/core';
import 'atropos/css'
import Atropos from 'atropos';

@Component({
  selector: 'app-atropos-card',
  imports: [],
  templateUrl: './atropos-card.component.html',
  styleUrl: './atropos-card.component.css'
})
export class AtroposCardComponent implements AfterViewInit {
  @ViewChildren('atroposElement') atroposElements!: QueryList<ElementRef>

  ngAfterViewInit(): void {
    this.atroposElements.forEach((element) => {
      Atropos({
        el: element.nativeElement,
        activeOffset: 20,
        shadowScale: 1,
        shadow: true,
        onEnter() {
          console.log('Enter');
        },
        onLeave() {
          console.log('Leave');
        },
        onRotate(x, y) {
          console.log('Rotate', x, y);
        }
      })
    })
  }

}
