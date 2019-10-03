import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

constructor(private dialog: MatDialog) { }
openConfirmDialog(message){
  return  this.dialog.open(ConfirmDialogComponent,{
    width:'390px',
    disableClose:true,
    data:{
      message:message
    }
  });
}


openMessageDialog(message){
  return  this.dialog.open(MessageDialogComponent,{
    width:'390px',
    disableClose:true,
    data:{
      message:message
    }
  });
}


}
