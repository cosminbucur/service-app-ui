import { TyreOptions } from './../../../../shared/models/tyre.options';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { appRoutesNames } from 'src/app/app.routes.names';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-tyre-details',
  templateUrl: './tyre-details.component.html',
  styleUrls: ['./tyre-details.component.scss']
})
export class TyreDetailsComponent implements OnInit {

  private tyreOptions: TyreOptions = new TyreOptions();
  public rimTypes = this.tyreOptions.rimTypes;
  public tyreTypes = this.tyreOptions.tyreTypes;
  public brands = this.tyreOptions.brands;
  public filteredBrands: Observable<any[]>;
  public wearLevels = this.tyreOptions.wearLevels;
  public seasons = this.tyreOptions.seasons;

  public form: FormGroup;

  // TODO use tyre model
  // TODO add caps no
  public tyre: any = {
    id: null,
    width: null,
    height: null,
    diameterType: null,
    rimType: 'plate',
    tyreType: 'regular',
    brand: null,
    wearLevel: 'medium',
    season: 'summer',
  };

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  public ngOnInit(): void {
    this.initializeData();

    this.filteredBrands = this.form.get('brand').valueChanges.pipe(
        startWith(''),
        map(brand => typeof brand === 'string' ? brand : brand.viewValue),
        map(viewValue => viewValue ? this._filter(viewValue) : this.brands.slice())
      );
  }

  // TODO fix display brand
  public displayBrand(brand: any): string {
    return brand && brand.value ? brand.value : '';
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(brand => brand.value.toLowerCase().indexOf(filterValue) === 0);
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

  // private methods

  private async initializeData() {
    this.createReactiveForm();
  }

  // TODO use form builder
  private createReactiveForm() {
    this.form = new FormGroup({
      width: new FormControl(this.tyre.width, Validators.required),
      height: new FormControl(this.tyre.height, Validators.required),
      diameterType: new FormControl(this.tyre.diameterType, Validators.required),
      rimType: new FormControl(this.tyre.rimType, Validators.required),
      tyreType: new FormControl(this.tyre.tyreType, Validators.required),
      brand: new FormControl(this.tyre.brand, Validators.required),
      wearLevel: new FormControl(this.tyre.wearLevel, Validators.required),
      season: new FormControl(this.tyre.season, Validators.required)
    });
  }

  private goToVisitDetails() {
    this.router.navigate([`/${appRoutesNames.STEP_TYRES}`]);
  }

}
