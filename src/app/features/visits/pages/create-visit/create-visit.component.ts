import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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

  reviewDetailsFormGroup: FormGroup;

  public customerDetails: any = {
    firstName: null,
    lastName: null,
    company: null,
    phoneNumber: null,
    email: null,
    licensePlate: null
  };


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
      serviceDetailsControl: ['', Validators.required]
    });
    this.tyreDetailsFormGroup = this.formBuilder.group({
      tyreSizeCtrl: ['', Validators.required]
    });

    this.initialiseReviewData();

  }

  private async initialiseReviewData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    this.reviewDetailsFormGroup = new FormGroup(
      {
        firstName: new FormControl(this.customerDetails.firstName, Validators.required),
        lastName: new FormControl(this.customerDetails.lastName, Validators.required),
        company: new FormControl(this.customerDetails.company, Validators.required),
        phoneNumber: new FormControl(this.customerDetails.phoneNumber, Validators.required),
        email: new FormControl(this.customerDetails.email, Validators.required),
        licensePlate: new FormControl(this.customerDetails.licensePlate, Validators.required)
      }
    );
  }

}
