import { Tyre } from 'src/app/shared/models/tyre.model';
import { TyreOptions } from 'src/app/shared/models/tyre.options';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';
import { DropdownOption } from '../../../../shared/models/dropdown-options';
import { seasons } from '../../../../shared/models/constants/seasons';
import { brands } from '../../../../shared/models/constants/brands';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-tyre-details',
  templateUrl: './tyre-details.component.html',
  styleUrls: ['./tyre-details.component.scss']
})
export class TyreDetailsComponent implements OnInit {

  @Output() tyreSaved = new EventEmitter<Tyre>();
  @Output() tyreCanceled = new EventEmitter<void>();

  private tyreOptions: TyreOptions = new TyreOptions();
  rimTypes = this.tyreOptions.rimTypes;
  tyreTypes = this.tyreOptions.tyreTypes;
  availableBrands: DropdownOption[] = brands;
  availableSeasons: DropdownOption[] = seasons;
  wearLevels = this.tyreOptions.wearLevels;

  filteredBrands: Observable<DropdownOption[]>;
  subscription: Subscription;
  form: FormGroup;

  tyre: Tyre = {} as Tyre;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.initializeData();
    this.setBrand();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayBrand(brand: DropdownOption): string {
    return brand && brand.display ? brand.display : '';
  }

  private filter(display: string): DropdownOption[] {
    const filterValue = display.toLowerCase();
    return this.availableBrands.filter(brand => brand.display.toLowerCase().indexOf(filterValue) === 0);
  }

  async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the tire fields!');
      return;
    }

    this.notificationService.success('Tire details saved.');
    this.tyreSaved.emit(this.form.value);
  }

  cancel() {
    this.tyreCanceled.emit();
  }

  // private methods

  private async initializeData() {
    this.createForm();
    this.setTyreDetails();
  }

  private createForm() {
    this.form = this.fb.group({
      width: ['', Validators.required],
      height: ['', Validators.required],
      diameterType: ['', Validators.required],
      rimType: ['plate', Validators.required],
      tyreType: ['regular', Validators.required],
      brand: [null, Validators.required],
      wearLevel: ['medium', Validators.required],
      season: ['summer', Validators.required]
    });
  }

  private setTyreDetails() {
    this.subscription = this.dialogService.currentTyre
    .subscribe(tyre => this.tyre = tyre);

    this.form.controls['width'].setValue(this.tyre.width);
    this.form.controls['height'].setValue(this.tyre.height);
    this.form.controls['diameterType'].setValue(this.tyre.diameterType);
    this.form.controls['rimType'].setValue(this.tyre.rimType);
    this.form.controls['tyreType'].setValue(this.tyre.tyreType);
    this.form.controls['brand'].setValue(this.tyre.brand);
    this.form.controls['wearLevel'].setValue(this.tyre.wearLevel);
    this.form.controls['season'].setValue(this.tyre.season);

    console.log('set', this.tyre);
  }

  private setBrand() {
    this.filteredBrands = this.form.get('brand').valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.display),
      map(display => display ? this.filter(display) : this.availableBrands.slice())
    );
  }

}
