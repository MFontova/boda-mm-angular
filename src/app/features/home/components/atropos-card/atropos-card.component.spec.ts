import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtroposCardComponent } from './atropos-card.component';

describe('AtroposCardComponent', () => {
  let component: AtroposCardComponent;
  let fixture: ComponentFixture<AtroposCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtroposCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtroposCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
