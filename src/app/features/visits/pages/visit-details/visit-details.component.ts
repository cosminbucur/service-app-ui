import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

  onCarData = [
    'Front left - Summer',
    'Front right - Summer',
    'Rear left - Summer',
    'Rear right - Summer'
  ];

  inStorageData = [
    'Front left - Winter',
    'Front right - Winter',
    'Rear left - Winter',
    'Rear right - Winter'
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
