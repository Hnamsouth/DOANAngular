import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnItemRTRComponent } from './cpn-item-rtr.component';

describe('CpnItemRTRComponent', () => {
  let component: CpnItemRTRComponent;
  let fixture: ComponentFixture<CpnItemRTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnItemRTRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnItemRTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
