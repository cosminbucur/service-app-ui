import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mocks/mocks';

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

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeData();
    this.createForm();
  }

  // actions

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

  // private methods

  private async initializeData() {
  }

  private createForm() {
    this.form = this.fb.group({
      storagePoint: ['', Validators.required]
    });
  }

}
