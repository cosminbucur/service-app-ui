import { CustomerDialogComponent } from './../../components/customer-dialog/customer-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-visit-details2',
  templateUrl: './visit-details2.component.html',
  styleUrls: ['./visit-details2.component.scss']
})
export class VisitDetails2Component implements OnInit {



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

  private dialogRef;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.customerDetailsFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      licensePlate: ['', Validators.required]
    });
    this.serviceDetailsFormGroup = this.formBuilder.group({
      date: ['', Validators.required],
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

  public openDialog(): void {
    this.dialogRef = this.dialog.open(CustomerDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
