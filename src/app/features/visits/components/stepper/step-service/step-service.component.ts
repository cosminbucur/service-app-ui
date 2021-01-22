import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerVisit } from 'src/app/shared/models/visit.model';

@Component({
  selector: 'app-step-service',
  templateUrl: './step-service.component.html',
  styleUrls: ['./step-service.component.scss']
})
export class StepServiceComponent implements OnInit {

  form: FormGroup;

  @Input() visit: CustomerVisit;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  populateVisit(visit: CustomerVisit) {
    let serviceInfo: FormGroup = this.form;

    visit.mechanicId = serviceInfo.controls['mechanicName'].value;
    visit.servicesPerformed = serviceInfo.controls['servicesPerformed'].value;
    visit.observations = serviceInfo.controls['observations'].value;
  }

  private initForm() {
    this.form = this.fb.group({
      mechanicName: ['', Validators.required],
      servicesPerformed: ['', Validators.required],
      observations: ['']
    });
  }
}

