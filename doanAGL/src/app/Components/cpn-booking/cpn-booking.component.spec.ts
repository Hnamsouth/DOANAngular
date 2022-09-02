import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnBookingComponent } from './cpn-booking.component';

describe('CpnBookingComponent', () => {
  let component: CpnBookingComponent;
  let fixture: ComponentFixture<CpnBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
