import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideAttractionMainComponent } from './ride-attraction-main.component';

describe('RideAttractionMainComponent', () => {
  let component: RideAttractionMainComponent;
  let fixture: ComponentFixture<RideAttractionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideAttractionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideAttractionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
