import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { appRoutesNames } from 'src/app/app.routes.names';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  public form: FormGroup;

  public tyre: any = {
    id: null,
    width: null,
    height: null,
    diameterType: null,
    rimType: null,
    tyreType: null,
    brand: null,
    status: null,
    season: null
  };

  public selectedRimType: string;
  public selectedTyreType: string;
  public selectedBrand: string;
  public selectedStatus: string;
  public selectedSeason: string;

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the tire fields!');
      return;
    }

    this.notificationService.success('Tire details saved.');
  }

  public cancel() {
    this.goToVisitDetails();
  }

  private async initializeData() {
    this.createReactiveForm();
    this.setDefaultValues();
  }

  private createReactiveForm() {
    this.form = new FormGroup({
      width: new FormControl(this.tyre.width, Validators.required),
      height: new FormControl(this.tyre.height, Validators.required),
      diameterType: new FormControl(this.tyre.diameterType, Validators.required),
      rimType: new FormControl(this.tyre.rimType, Validators.required),
      tyreType: new FormControl(this.tyre.tyreType, Validators.required),
      brand: new FormControl(this.tyre.brand, Validators.required),
      status: new FormControl(this.tyre.status, Validators.required),
      season: new FormControl(this.tyre.season, Validators.required)
    });
  }

  private setDefaultValues() {
    this.selectedRimType = 'plate';
    this.selectedTyreType = 'regular';
    this.selectedStatus = 'medium';
  }

  private goToVisitDetails() {
    this.router.navigate([`/${appRoutesNames.VISIT_DETAILS}`]);
  }

}
