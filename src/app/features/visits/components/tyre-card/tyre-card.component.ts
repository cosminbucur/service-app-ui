import { Tyre } from 'src/app/shared/models/tyre.model';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { TyreDialogComponent } from '../dialogs/tyre-dialog/tyre-dialog.component';

@Component({
  selector: 'app-tyre-card',
  templateUrl: './tyre-card.component.html',
  styleUrls: ['./tyre-card.component.scss']
})
export class TyreCardComponent implements OnInit {

  @Input() tyre: Tyre;
  @Output() tyreDeleted = new EventEmitter<Tyre>();
  @Output() tyreCloned = new EventEmitter<Tyre>();
  @Output() tyreEdited = new EventEmitter<Tyre>();

  constructor(
    private dialogService: DialogService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  editTyre(tyre: Tyre) {
    console.log('edit tyre', tyre);
    // this.tyreEdited.emit(tyre);
    // TODO: open dialog
    this.openDialog();

    this.dialogService.changeTyre(this.tyre);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TyreDialogComponent);

    dialogRef.afterClosed().subscribe(newTyre => {
      if (newTyre) {
        console.log('dialog result', newTyre);
        // this.mountedTyres.push(newTyre);
      }
    });
  }

  deleteTyre(tyre: Tyre) {
    console.log('delete tyre', tyre);
    this.tyreDeleted.emit(tyre);
  }

  cloneTyre(tyre: Tyre) {
    console.log('clone tyre', tyre);
    this.tyreCloned.emit(tyre);
  }
}
