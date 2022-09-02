import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnGalleryComponent } from './cpn-gallery.component';

describe('CpnGalleryComponent', () => {
  let component: CpnGalleryComponent;
  let fixture: ComponentFixture<CpnGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
