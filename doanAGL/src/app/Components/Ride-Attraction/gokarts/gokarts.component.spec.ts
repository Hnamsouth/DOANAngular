import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokartsComponent } from './gokarts.component';

describe('GokartsComponent', () => {
  let component: GokartsComponent;
  let fixture: ComponentFixture<GokartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GokartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GokartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
