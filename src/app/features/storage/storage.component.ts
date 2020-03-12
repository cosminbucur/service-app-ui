import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
