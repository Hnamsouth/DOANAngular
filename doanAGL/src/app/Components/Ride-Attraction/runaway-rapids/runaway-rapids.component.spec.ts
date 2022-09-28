import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunawayRapidsComponent } from './runaway-rapids.component';

describe('RunawayRapidsComponent', () => {
  let component: RunawayRapidsComponent;
  let fixture: ComponentFixture<RunawayRapidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunawayRapidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunawayRapidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
