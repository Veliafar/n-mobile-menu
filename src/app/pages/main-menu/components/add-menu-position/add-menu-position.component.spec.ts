import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuPositionComponent } from './add-menu-position.component';

describe('AddMenuPositionComponent', () => {
  let component: AddMenuPositionComponent;
  let fixture: ComponentFixture<AddMenuPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
