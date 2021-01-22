import { MatDialog } from '@angular/material/dialog';
import { TyreDialogComponent } from './../../dialogs/tyre-dialog/tyre-dialog.component';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mocks/mocks';
import { CustomerVisit } from 'src/app/shared/models/visit.model';
import { StoragePoint } from '../../../../../shared/models/storagePoint.model';

@Component({
  selector: 'app-step-tyres',
  templateUrl: './step-tyres.component.html',
  styleUrls: ['./step-tyres.component.scss']
})
export class StepTyresComponent implements OnInit {

  form: FormGroup;

  // TODO: remove mock data
  private mockData: MockData = new MockData();
  mountedTyres = this.mockData.onCarData;
  storedTyres = this.mockData.inStorageData;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.initializeData();
    this.initForm();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TyreDialogComponent);

    dialogRef.afterClosed().subscribe(newTyre => {
      if (newTyre) {
        console.log('dialog result', newTyre);
        this.mountedTyres.push(newTyre);
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTyreDeleted(selectedTyre: any) {
    console.log('delete', selectedTyre);
    const deletedIndex = this.mountedTyres.indexOf(selectedTyre);
    if (deletedIndex > -1) {
      this.mountedTyres.splice(deletedIndex, 1);
    }
  }

  onTyreCloned(selectedTyre: any) {
    console.log('clone', selectedTyre);
    this.mountedTyres.push(selectedTyre);
  }

  private async initializeData() {
  }

  private initForm() {
    this.form = this.fb.group({
      storagePoint: ['', Validators.required],
      rimCapsCount: ['16', Validators.required],
    });
  }

  populateVisit(visit: CustomerVisit) {
    let tyreInfo: FormGroup = this.form;

    let storagePoint = {} as StoragePoint;

    storagePoint.code = tyreInfo.controls['storagePoint'].value;
    storagePoint.rimCapsCount = tyreInfo.controls['rimCapsCount'].value;
    storagePoint.mountedTyres = this.mountedTyres;
    storagePoint.storedTyres = this.storedTyres;

    visit.storagePoint = storagePoint;
  }
}
