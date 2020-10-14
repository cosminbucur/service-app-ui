import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-tyres',
  templateUrl: './step-tyres.component.html',
  styleUrls: ['./step-tyres.component.scss']
})
export class StepTyresComponent implements OnInit {

  public form: FormGroup;

  public onCarData = [
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
  ];

  public inStorageData = [
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
  ];

  public ngOnInit(): void {
    this.initializeData();
    this.form = new FormGroup({});
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

}
