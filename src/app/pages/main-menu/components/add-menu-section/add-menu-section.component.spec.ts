import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuSectionComponent } from './add-menu-section.component';

describe('AddMenuSectionComponent', () => {
  let component: AddMenuSectionComponent;
  let fixture: ComponentFixture<AddMenuSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
