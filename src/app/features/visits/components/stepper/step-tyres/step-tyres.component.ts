import { MatDialog } from '@angular/material/dialog';
import { TyreDialogComponent } from './../../dialogs/tyre-dialog/tyre-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() visit: CustomerVisit;

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

  onMountedTyreDeleted(selectedTyre: any) {
    console.log('delete', selectedTyre);
    this.mountedTyres.splice(this.mountedTyres.indexOf(selectedTyre), 1);
  }

  onStoredTyreDeleted(selectedTyre: any) {
    console.log('delete', selectedTyre);
    this.storedTyres.splice(this.storedTyres.indexOf(selectedTyre), 1);
  }

  onMountedTyreCloned(selectedTyre: any) {
    console.log('clone', selectedTyre);
    this.mountedTyres.push(selectedTyre);
  }

  onStoredTyreCloned(selectedTyre: any) {
    console.log('clone', selectedTyre);
    this.storedTyres.push(selectedTyre);
  }

  private async initializeData() {
  }

  private initForm() {
    this.form = this.fb.group({
      storagePoint: ['', Validators.required],
      rimCapsCount: ['16', Validators.required],
    });

    // TODO: remove this
    this.form = this.fb.group({
      storagePoint: ['R1E1E2', Validators.required],
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
