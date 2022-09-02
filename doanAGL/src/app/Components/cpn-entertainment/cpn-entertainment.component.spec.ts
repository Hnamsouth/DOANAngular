import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnEntertainmentComponent } from './cpn-entertainment.component';

describe('CpnEntertainmentComponent', () => {
  let component: CpnEntertainmentComponent;
  let fixture: ComponentFixture<CpnEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
