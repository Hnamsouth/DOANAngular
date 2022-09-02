import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnHeaderComponent } from './cpn-header.component';

describe('CpnHeaderComponent', () => {
  let component: CpnHeaderComponent;
  let fixture: ComponentFixture<CpnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
