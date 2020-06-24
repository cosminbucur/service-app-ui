import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  ELEMENT_DATA: any[] = [
    { visitDate: new Date(2020, 1, 20), reason: 'replace summer with winter' },
    { visitDate: new Date(2019, 12, 15), reason: 'tyre service' },
    { visitDate: new Date(2019, 6, 10), reason: 'replace winter with summer' },
    { visitDate: new Date(2018, 12, 5), reason: 'initial visit' }
  ];

  public displayedColumns = ['visitDate', 'name'];
  public dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
