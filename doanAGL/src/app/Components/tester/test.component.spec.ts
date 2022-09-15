import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesComponent } from './test.component';

describe('TestComponent', () => {
  let component: PracticesComponent;
  let fixture: ComponentFixture<PracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
