import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmDialog',
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close(false);
  }

}
