import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyre-details',
  templateUrl: './tyre-details.component.html',
  styleUrls: ['./tyre-details.component.scss']
})
export class TyreDetailsComponent implements OnInit {

  public rimTypes = [
    { value: 'plate', viewValue: 'Plate' },
    { value: 'alloy', viewValue: 'Alloy' }
  ];

  public tyreTypes = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'runflat', viewValue: 'Runflat' }
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
    { value: 'worn', viewValue: 'Worn' }
  ];

  public seasons = [
    { value: 'summer', viewValue: 'Summer' },
    { value: 'winter', viewValue: 'Winter' },
    { value: 'all-season', viewValue: 'All season' }
  ];

  public selectedRimType: string;
  public selectedTyreType: string;
  public selectedBrand: string;
  public selectedStatus: string;
  public selectedSeason: string;

  ngOnInit() {
    this.setDefaultValues();
  }

  private setDefaultValues() {
    this.selectedRimType = 'plate';
    this.selectedTyreType = 'regular';
    this.selectedStatus = 'medium';
  }

}
