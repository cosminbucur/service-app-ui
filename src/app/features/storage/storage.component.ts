import { NotificationService } from './../../core/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  public data = [
    {
      licensePlate: 'B22ABC', storagePoint: '1-1-1-2-3', tires: [
        { size: '215 / 65 R17', brand: 'Continental', season: 'summer', wornLevel: 'normal' },
        { size: '215 / 65 R17', brand: 'Continental', season: 'summer', wornLevel: 'normal' },
        { size: '215 / 65 R17', brand: 'Continental', season: 'summer', wornLevel: 'normal' },
        { size: '215 / 65 R17', brand: 'Continental', season: 'summer', wornLevel: 'normal' }
      ]
    },
    {
      licensePlate: 'IF33DEF', storagePoint: '1-1-1-2-4', tires: [
        { size: '215 / 65 R17', brand: 'Pirelli', season: 'winter', wornLevel: 'danger' },
        { size: '215 / 65 R17', brand: 'Pirelli', season: 'winter', wornLevel: 'danger' },
        { size: '215 / 65 R17', brand: 'Pirelli', season: 'winter', wornLevel: 'danger' },
        { size: '215 / 65 R17', brand: 'Pirelli', season: 'winter', wornLevel: 'danger' }
      ]
    }
  ];

  public form: FormGroup;
  public storagePoint: any = {
    id: null,
    section: null,
    area: null,
    row: null,
    shelf: null,
    floor: null
  };

  constructor(private notificationService: NotificationService) { }

  public ngOnInit(): void {
    this.initializeData();
  }

  public moveToStoragePoint() {
    this.notificationService.success('Tyres moved to storage.');
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    this.form = new FormGroup({
      section:  new FormControl(this.storagePoint.section, Validators.required),
      area:     new FormControl(this.storagePoint.area, Validators.required),
      row:      new FormControl(this.storagePoint.row, Validators.required),
      shelf:    new FormControl(this.storagePoint.shelf, Validators.required),
      floor:    new FormControl(this.storagePoint.floor, Validators.required)
    });
  }
}
