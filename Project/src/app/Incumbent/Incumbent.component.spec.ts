/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IncumbentComponent } from './Incumbent.component';

describe('IncumbentComponent', () => {
  let component: IncumbentComponent;
  let fixture: ComponentFixture<IncumbentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncumbentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncumbentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
