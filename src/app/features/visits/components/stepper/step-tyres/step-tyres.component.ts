import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TyreDialogComponent } from './../../dialogs/tyre-dialog/tyre-dialog.component';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mocks/mocks';
import { Tyre } from 'src/app/shared/models/tyre.model';

@Component({
  selector: 'app-step-tyres',
  templateUrl: './step-tyres.component.html',
  styleUrls: ['./step-tyres.component.scss']
})
export class StepTyresComponent implements OnInit {

  public form: FormGroup;

  private mockData: MockData = new MockData();
  public onCarData = this.mockData.onCarData;
  public inStorageData = this.mockData.inStorageData;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.initializeData();
    this.createForm();
  }

  // actions

  public openDialog(): void {
    const dialogRef = this.dialog.open(TyreDialogComponent);

    dialogRef.afterClosed().subscribe(newTyre => {
      if (newTyre) {
        console.log('dialog result', newTyre);
        this.onCarData.push(newTyre);
      }
    });
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public onTyreDeleted(selectedTyre: any) {
    console.log('delete', selectedTyre);
    const deletedIndex = this.onCarData.indexOf(selectedTyre);
    if (deletedIndex > -1) {
      this.onCarData.splice(deletedIndex, 1);
    }
  }

  public onTyreCloned(selectedTyre: any) {
    console.log('clone', selectedTyre);
    this.onCarData.push(selectedTyre);
  }

  // private methods

  private async initializeData() {
  }

  private createForm() {
    this.form = this.fb.group({
      storagePoint: ['', Validators.required],
      capsNo: ['12', Validators.required],
    });
  }

}
