import { CustomerDialogComponent } from './../../dialogs/customer-dialog/customer-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';
import { CustomersService } from 'src/app/core/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { CustomerVisit } from '../../../../../shared/models/visit.model';

@Component({
  selector: 'app-step-customer',
  templateUrl: './step-customer.component.html',
  styleUrls: ['./step-customer.component.scss']
})
export class StepCustomerComponent implements OnInit {

  customers: Customer[] = [];
  form: FormGroup;

  @Input() visit: CustomerVisit;

  constructor(private fb: FormBuilder,
    private customerService: CustomersService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.initializeData();
    this.createForm();
  }

  populateVisit(visit: CustomerVisit) {
    let customerInfo: FormGroup = this.form;

    let customer = {} as Customer;

    customer.firstName = customerInfo.controls['firstName'].value;
    customer.lastName = customerInfo.controls['lastName'].value;
    customer.company = customerInfo.controls['company'].value;
    customer.phoneNumber = customerInfo.controls['phoneNumber'].value;
    customer.email = customerInfo.controls['email'].value;
    customer.licensePlate = customerInfo.controls['licensePlate'].value;

    visit.customer = customer;
    console.log("COSMIN", visit);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CustomerDialogComponent);

    dialogRef.afterClosed().subscribe(newCustomer => {
      if (newCustomer) {
        console.log('dialog result', newCustomer);
        this.visit.customer = newCustomer;
        this.visit.customer.isActive = true;
      }
    });
  }

  // private methods

  private async initializeData() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });

    console.log(this.customers);
  }

  private createForm() {
    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(phonePattern), Validators.required]],
      email: ['', [Validators.pattern(emailPattern), Validators.required]],
      licensePlate: ['', Validators.required]
    });

    // TODO: remove this
    this.form = this.fb.group({
      firstName: ['Alex', Validators.required],
      lastName: ['Vasile', Validators.required],
      company: ['Pipera', Validators.required],
      phoneNumber: ['0722333444', [Validators.pattern(phonePattern), Validators.required]],
      email: ['alexvasile@gmail.com', [Validators.pattern(emailPattern), Validators.required]],
      licensePlate: ['B22AAA', Validators.required]
    });
  }
}
