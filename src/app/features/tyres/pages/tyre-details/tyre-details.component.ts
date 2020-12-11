import { Tyre } from 'src/app/shared/models/tyre.model';
import { TyreOptions } from 'src/app/shared/models/tyre.options';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { appRoutesNames } from 'src/app/app.routes.names';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-tyre-details',
  templateUrl: './tyre-details.component.html',
  styleUrls: ['./tyre-details.component.scss']
})
export class TyreDetailsComponent implements OnInit {

  @Output() tyreSaved = new EventEmitter<Tyre>();
  @Output() tyreCanceled = new EventEmitter<void>();

  private tyreOptions: TyreOptions = new TyreOptions();
  public rimTypes = this.tyreOptions.rimTypes;
  public tyreTypes = this.tyreOptions.tyreTypes;
  public brands = this.tyreOptions.brands;
  public filteredBrands: Observable<any[]>;
  public wearLevels = this.tyreOptions.wearLevels;
  public seasons = this.tyreOptions.seasons;

  public form: FormGroup;

  public tyre: Tyre = {
    id: null,
    width: null,
    height: null,
    diameterType: null,
    rimType: 'plate',
    tyreType: 'regular',
    brand: null,
    wearLevel: 'medium',
    season: 'summer'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  public ngOnInit(): void {
    this.initializeData();
    this.setBrand();
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
    this.tyreSaved.emit(this.form.value);
  }

  public cancel() {
    this.tyreCanceled.emit();
  }

  // private methods

  private async initializeData() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      width: [this.tyre.width, Validators.required],
      height: [this.tyre.height, Validators.required],
      diameterType: [this.tyre.diameterType, Validators.required],
      rimType: [this.tyre.rimType, Validators.required],
      tyreType: [this.tyre.tyreType, Validators.required],
      brand: [this.tyre.brand, Validators.required],
      wearLevel: [this.tyre.wearLevel, Validators.required],
      season: [this.tyre.season, Validators.required]
    });
  }

  private setBrand() {
    this.filteredBrands = this.form.get('brand').valueChanges.pipe(
      startWith(''),
      map(brand => typeof brand === 'string' ? brand : brand.viewValue),
      map(viewValue => viewValue ? this._filter(viewValue) : this.brands.slice())
    );
  }

}
