import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  ELEMENT_DATA: any[] = [
    {visitDate: new Date(2020, 1, 20), name: 'Hydrogen'},
    {visitDate: new Date(2020, 1, 20), name: 'Helium'},
    {visitDate: new Date(2020, 1, 20), name: 'Lithium'},
    {visitDate: new Date(2020, 1, 20), name: 'Beryllium'}
  ];

  public displayedColumns = ['visitDate', 'name'];
  public dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
