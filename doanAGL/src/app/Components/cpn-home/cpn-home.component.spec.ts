import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnHomeComponent } from './cpn-home.component';

describe('CpnHomeComponent', () => {
  let component: CpnHomeComponent;
  let fixture: ComponentFixture<CpnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
