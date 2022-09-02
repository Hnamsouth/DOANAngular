import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnRestaurantComponent } from './cpn-restaurant.component';

describe('CpnRestaurantComponent', () => {
  let component: CpnRestaurantComponent;
  let fixture: ComponentFixture<CpnRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
