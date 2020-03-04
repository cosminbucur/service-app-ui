import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyre-details',
  templateUrl: './tyre-details.component.html',
  styleUrls: ['./tyre-details.component.scss']
})
export class TyreDetailsComponent implements OnInit {

  public rimTypes = [
    { value: 'plate', viewValue: 'Plate' },
    { value: 'alloy', viewValue: 'Alloy' },
  ];

  public tyreTypes = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'runflat', viewValue: 'Runflat' },
  ];

  public brands = [
    { value: 'continental', viewValue: 'Continental' },
    { value: 'dunlop', viewValue: 'Dunlop' },
    { value: 'michelin', viewValue: 'Michelin' },
    { value: 'pirelli', viewValue: 'Pirelli' }
  ];

  public tyreStatus = [
    { value: 'good', viewValue: 'Good' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'worn', viewValue: 'Worn' },
  ];

  public selectedRimType: string;
  public selectedTyreType: string;
  public selectedBrand: string;
  public selectedStatus: string;

  ngOnInit() {
    this.setDefaultValues();
  }

  private setDefaultValues() {
    this.selectedRimType = 'plate';
    this.selectedTyreType = 'regular';
    this.selectedBrand = 'continental';
    this.selectedStatus = 'medium';
  }

}
