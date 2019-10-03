import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAllComponent } from './faculty-all.component';

describe('FacultyAllComponent', () => {
  let component: FacultyAllComponent;
  let fixture: ComponentFixture<FacultyAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
