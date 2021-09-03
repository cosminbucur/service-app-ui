import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TyreDialogComponent } from '../tyre-dialog/tyre-dialog.component';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TyreDialogComponent>) { }

  ngOnInit() {
  }

  save(customer: any) {
    this.dialogRef.close(customer);
  }

  cancel() {
    this.dialogRef.close();
  }

}
