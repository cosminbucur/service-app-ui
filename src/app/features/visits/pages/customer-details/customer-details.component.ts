import { CustomersService } from 'src/app/core/services/customers.service';
import { appRoutesNames } from 'src/app/app.routes.names';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Customer } from '../../../../shared/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Output() customerSaved = new EventEmitter<Customer>();
  @Output() customerCanceled = new EventEmitter<void>();

  form: FormGroup;
  visit: any = {
    id: null,
    firstName: null,
    lastName: null,
    company: null,
    phone: null,
    email: null
  };

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the customer fields!');
      return;
    }

    this.notificationService.success('Customer details saved.');
    this.customerSaved.emit(this.form.value);
  }

  cancel() {
    this.customerCanceled.emit();
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.form = this.fb.group({
      firstName:[this.visit.firstName, Validators.required],
      lastName:[this.visit.lastName, Validators.required],
      company:[this.visit.company, Validators.required],
      phone:[this.visit.phone, [Validators.pattern(phonePattern), Validators.required]],
      email:[this.visit.email, [Validators.pattern(emailPattern), Validators.required]],
    });
  }

}
