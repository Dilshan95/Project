import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcApprovalComponent } from './vc-approval.component';

describe('VcApprovalComponent', () => {
  let component: VcApprovalComponent;
  let fixture: ComponentFixture<VcApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
