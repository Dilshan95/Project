/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Reservations_TableComponent } from './Reservations_Table.component';

describe('Reservations_TableComponent', () => {
  let component: Reservations_TableComponent;
  let fixture: ComponentFixture<Reservations_TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reservations_TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservations_TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
