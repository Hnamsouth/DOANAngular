import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideheightTicketComponent } from './rideheight-ticket.component';

describe('RideheightTicketComponent', () => {
  let component: RideheightTicketComponent;
  let fixture: ComponentFixture<RideheightTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideheightTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideheightTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
