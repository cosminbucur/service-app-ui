import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-service',
  templateUrl: './step-service.component.html',
  styleUrls: ['./step-service.component.scss']
})
export class StepServiceComponent implements OnInit {

  public form: FormGroup;

  public serviceDetails: any = {
    visitDate: null,
    mechanicName: null,
    servicesPerformed: null,
    observations: null
  };

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeData();
    this.createForm();
  }

  // private methods

  private async initializeData() {

  }

  private createForm() {
    this.form = this.fb.group({
      mechanicName: ['', Validators.required],
      servicesPerformed: ['', Validators.required],
      observations: ['']
    });
  }
}

