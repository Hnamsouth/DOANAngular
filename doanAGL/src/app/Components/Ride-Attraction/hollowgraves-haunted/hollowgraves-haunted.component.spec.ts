import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowgravesHauntedComponent } from './hollowgraves-haunted.component';

describe('HollowgravesHauntedComponent', () => {
  let component: HollowgravesHauntedComponent;
  let fixture: ComponentFixture<HollowgravesHauntedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollowgravesHauntedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollowgravesHauntedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
