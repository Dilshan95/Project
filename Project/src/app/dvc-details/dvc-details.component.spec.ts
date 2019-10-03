import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvcDetailsComponent } from './dvc-details.component';

describe('DvcDetailsComponent', () => {
  let component: DvcDetailsComponent;
  let fixture: ComponentFixture<DvcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
