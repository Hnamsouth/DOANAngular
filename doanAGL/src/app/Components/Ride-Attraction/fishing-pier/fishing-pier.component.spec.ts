import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingPierComponent } from './fishing-pier.component';

describe('FishingPierComponent', () => {
  let component: FishingPierComponent;
  let fixture: ComponentFixture<FishingPierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingPierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingPierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
