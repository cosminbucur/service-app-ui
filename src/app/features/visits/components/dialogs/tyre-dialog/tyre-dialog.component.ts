import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tyre-dialog',
  templateUrl: './tyre-dialog.component.html',
  styleUrls: ['./tyre-dialog.component.scss']
})
export class TyreDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TyreDialogComponent>
    ) { }

  public ngOnInit(): void {
  }

  // TODO get value from component
  public save(): void {
    this.dialogRef.close('tyre data');
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
