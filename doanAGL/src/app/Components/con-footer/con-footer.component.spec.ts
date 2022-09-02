import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConFooterComponent } from './con-footer.component';

describe('ConFooterComponent', () => {
  let component: ConFooterComponent;
  let fixture: ComponentFixture<ConFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
