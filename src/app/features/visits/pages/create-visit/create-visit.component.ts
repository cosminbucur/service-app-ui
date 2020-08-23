import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioGroup } from '@angular/material';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss']
})
export class CreateVisitComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  isLinear = false;
  customerDetailsFormGroup: FormGroup;
  serviceDetailsFormGroup: FormGroup;
  tyreDetailsFormGroup: FormGroup;
  mountedTyresSeasonGroup: MatRadioGroup;
  hotelTyresSeasonGroup: MatRadioGroup;

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
    hotelWidth: null,
    hotelHeight: null,
    hotelRimDiameter: null,
    hotelBrand: null,
    hotelTyreWearIndicator: null,
    hotelRims: null,
    hotelCaps: null,
    storagePointLocation: null
  }

  public mountedSeason: string;
  public hotelSeason: string;

  public seasons: string[] = ['Summer', 'Winter', 'All Seasons'];


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

}
