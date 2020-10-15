import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TyreDialogComponent } from '../tyre-dialog/tyre-dialog.component';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TyreDialogComponent>
  ) { }

  public ngOnInit(): void {
  }

  // TODO get value from component
  // https://stackoverflow.com/questions/47592364/usage-of-mat-dialog-close
  public save(): void {
    this.dialogRef.close('customer data');
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
