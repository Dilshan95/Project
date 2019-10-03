import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAllComponent } from './department-all.component';

describe('DepartmentAllComponent', () => {
  let component: DepartmentAllComponent;
  let fixture: ComponentFixture<DepartmentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
