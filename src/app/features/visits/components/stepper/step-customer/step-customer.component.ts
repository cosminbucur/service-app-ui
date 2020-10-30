import { CustomerDialogComponent } from './../../dialogs/customer-dialog/customer-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';
import { CustomersService } from 'src/app/core/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-step-customer',
  templateUrl: './step-customer.component.html',
  styleUrls: ['./step-customer.component.scss']
})
export class StepCustomerComponent implements OnInit {

  public form: FormGroup;

  public customers: Customer[];

  public customerDetails: any = {
    firstName: null,
    lastName: null,
    company: null,
    phoneNumber: null,
    email: null,
    licensePlate: null
  };

  constructor(private fb: FormBuilder,
    private customerService: CustomersService,
    private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.initializeData();
    this.createForm();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
  }
}
