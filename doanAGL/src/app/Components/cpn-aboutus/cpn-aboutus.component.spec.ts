import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnAboutusComponent } from './cpn-aboutus.component';

describe('CpnAboutusComponent', () => {
  let component: CpnAboutusComponent;
  let fixture: ComponentFixture<CpnAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
