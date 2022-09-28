import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadesComponent } from './arcades.component';

describe('ArcadesComponent', () => {
  let component: ArcadesComponent;
  let fixture: ComponentFixture<ArcadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
