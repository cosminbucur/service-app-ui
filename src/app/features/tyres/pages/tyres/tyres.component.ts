import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyres',
  templateUrl: './tyres.component.html',
  styleUrls: ['./tyres.component.scss']
})
export class TyresComponent implements OnInit {

  public tyresBySize = [
    { size: 'P215/65R17 95H', count: 4 },
    { size: 'P215/65R15 95H', count: 8 }
  ];

  public tyresByBrand = [
    { brand: 'Continental', count: 8 },
    { brand: 'Pirelli', count: 6 },
    { brand: 'Michelin', count: 4 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
