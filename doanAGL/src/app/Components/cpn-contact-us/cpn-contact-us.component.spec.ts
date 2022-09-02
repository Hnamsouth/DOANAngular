import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnContactUsComponent } from './cpn-contact-us.component';

describe('CpnContactUsComponent', () => {
  let component: CpnContactUsComponent;
  let fixture: ComponentFixture<CpnContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
