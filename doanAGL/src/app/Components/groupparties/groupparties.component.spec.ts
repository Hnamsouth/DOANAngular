import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppartiesComponent } from './groupparties.component';

describe('GrouppartiesComponent', () => {
  let component: GrouppartiesComponent;
  let fixture: ComponentFixture<GrouppartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouppartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrouppartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
