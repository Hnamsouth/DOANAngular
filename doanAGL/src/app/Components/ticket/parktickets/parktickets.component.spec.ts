import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkticketsComponent } from './parktickets.component';

describe('ParkticketsComponent', () => {
  let component: ParkticketsComponent;
  let fixture: ComponentFixture<ParkticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
