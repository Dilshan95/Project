import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HodApprovalComponent } from './hodApproval/hodApproval.component';
import { DeanApprovalComponent } from './deanApproval/deanApproval.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirmDialog/confirmDialog.component';
import { MessageDialogComponent } from './messageDialog/messageDialog.component';
import {MatDialogModule} from '@angular/material';
import { VcApprovalComponent } from './vc-approval/vc-approval.component';


@NgModule({
   declarations: [
      AppComponent,
      HodApprovalComponent,
      DeanApprovalComponent,
      ConfirmDialogComponent,
      MessageDialogComponent,
      VcApprovalComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      BrowserAnimationsModule,
      MatDialogModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],

   entryComponents: [
      ConfirmDialogComponent,
      MessageDialogComponent//fordialogboxes
   ]
})
export class AppModule { }
