import {  Routes } from '@angular/router';
import { HodApprovalComponent } from './hodApproval/hodApproval.component';
import { DeanApprovalComponent } from './deanApproval/deanApproval.component';
import { VcApprovalComponent } from './vc-approval/vc-approval.component';

export const appRoutes: Routes = [
    { path: 'dean', component: DeanApprovalComponent },
    { path: 'hod/:reservationId', component: HodApprovalComponent},
    { path: 'dean/:reservationId', component: DeanApprovalComponent},
    { path: 'vc/:reservationId', component: VcApprovalComponent}

    
  ];