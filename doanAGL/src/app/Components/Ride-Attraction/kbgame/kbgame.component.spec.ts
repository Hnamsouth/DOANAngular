import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KBgameComponent } from './kbgame.component';

describe('KBgameComponent', () => {
  let component: KBgameComponent;
  let fixture: ComponentFixture<KBgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KBgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KBgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
