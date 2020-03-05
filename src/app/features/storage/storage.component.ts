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
        { size: 'P215/65R17 95H', brand: 'Continental', wornLevel: 'normal' },
        { size: 'P215/65R17 95H', brand: 'Continental', wornLevel: 'normal' },
        { size: 'P215/65R17 95H', brand: 'Continental', wornLevel: 'normal' },
        { size: 'P215/65R17 95H', brand: 'Continental', wornLevel: 'normal' }
      ]
    },
    {
      licensePlate: 'IF33DEF', storagePoint: '1-1-1-2-4', tires: [
        { size: 'P215/65R17 95H', brand: 'Pirelli', wornLevel: 'danger' },
        { size: 'P215/65R17 95H', brand: 'Pirelli', wornLevel: 'danger' },
        { size: 'P215/65R17 95H', brand: 'Pirelli', wornLevel: 'danger' },
        { size: 'P215/65R17 95H', brand: 'Pirelli', wornLevel: 'danger' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
