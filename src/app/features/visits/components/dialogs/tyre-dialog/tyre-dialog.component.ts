import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Tyre } from 'src/app/shared/models/tyre.model';

@Component({
  selector: 'app-tyre-dialog',
  templateUrl: './tyre-dialog.component.html',
  styleUrls: ['./tyre-dialog.component.scss']
})
export class TyreDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TyreDialogComponent>) { }

  ngOnInit() {
  }

  save(tyre: any) {
    this.dialogRef.close(tyre);
  }

  cancel() {
    this.dialogRef.close();
  }

}
