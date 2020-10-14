import { Router } from '@angular/router';
import { appRoutesNames } from '../../../../app.routes.names';
import { Customer } from 'src/app/shared/models/customer.model';
import { CustomersService } from '../../../../core/services/customers.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { CustomerDialogComponent } from '../../components/customer-dialog/customer-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

  public customers: Customer[];
  public isLinear = false;
  public customerDetailsFormGroup: FormGroup;
  public serviceDetailsFormGroup: FormGroup;
  public tyreDetailsFormGroup: FormGroup;
  public mountedTyresSeasonGroup: MatRadioGroup;
  public hotelTyresSeasonGroup: MatRadioGroup;

  public customerDetails: any = {
    firstName: null,
    lastName: null,
    company: null,
    phoneNumber: null,
    email: null,
    licensePlate: null
  };

  public serviceDetails: any = {
    date: null,
    mechanicName: null,
    servicesPerformed: null,
    observations: null
  };

  public tyreDetails: any = {
    mountedWidth: null,
    mountedHeight: null,
    mountedRimDiameter: null,
    mountedBrand: null,
    mountedSeason: null,
    hotelWidth: null,
    hotelHeight: null,
    hotelRimDiameter: null,
    hotelBrand: null,
    hotelTyreWearIndicator: null,
    hotelRims: null,
    hotelCaps: null,
    storagePointLocation: null
  };

  public seasons: string[] = ['Summer', 'Winter', 'All Seasons'];

  public visit: any = {
    id: null,
    visitDate: new Date(),
    firstName: null,
    lastName: null,
    company: null,
    phone: null,
    email: null,
    licensePlate: null,
    isActive: true
  };

  private dialogRef;

  // TODO remove this
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private customerService: CustomersService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.initializeData();

    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.customerDetailsFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(phonePattern), Validators.required]],
      email: ['', [Validators.pattern(emailPattern), Validators.required]],
      licensePlate: ['', Validators.required]
    });
    this.serviceDetailsFormGroup = this.formBuilder.group({
      mechanicName: ['', Validators.required],
      servicesPerformed: ['', Validators.required],
      observations: ['']
    });
    this.tyreDetailsFormGroup = this.formBuilder.group({
      mountedWidth: ['', Validators.required],
      mountedHeight: ['', Validators.required],
      mountedRimDiameter: ['', Validators.required],
      mountedBrand: ['', Validators.required],
      mountedSeason: ['', Validators.required],
      hotelWidth: ['', Validators.required],
      hotelHeight: ['', Validators.required],
      hotelRimDiameter: ['', Validators.required],
      hotelBrand: ['', Validators.required],
      hotelTyreWearIndicator: [''],
      hotelRims: ['', Validators.required],
      hotelCaps: [''],
      storagePointLocation: ['', Validators.required]
    });
  }

  private async initializeData() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });

    console.log(this.customers);
  }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(CustomerDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public cancel() {
    this.goToVisitsPage();
  }

  public print() {
    this.notificationService.info('Printing in progress.');
  }

  public toggleActive() {
    this.notificationService.info('Customer activated');
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the visit fields!');
      return;
    }

    this.notificationService.success('Visit details saved.');
  }

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }

  // getters & setters

  get firstName(): any {
    return this.form.get('firstName');
  }

}
