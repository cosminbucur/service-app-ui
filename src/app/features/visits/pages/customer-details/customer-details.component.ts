import { CustomersService } from './../../../../core/services/customers.service';
import { appRoutesNames } from './../../../../app.routes.names';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  public form: FormGroup;
  public visit: any = {
    id: null,
    firstName: null,
    lastName: null,
    company: null,
    phone: null,
    email: null
  };

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the visit fields!');
      return;
    }

    try {
      this.customerService.create(this.form.value);

      this.notificationService.success('Customer details saved.');
    } catch (err) {
      console.log(err.toString());
    }
  }

  public cancel() {
    this.goToVisitsPage();
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.form = new FormGroup({
      firstName:    new FormControl(this.visit.firstName, Validators.required),
      lastName:     new FormControl(this.visit.lastName, Validators.required),
      company:      new FormControl(this.visit.company, Validators.required),
      phone:        new FormControl(this.visit.phone, [Validators.pattern(phonePattern), Validators.required]),
      email:        new FormControl(this.visit.email, [Validators.pattern(emailPattern), Validators.required]),
    });
  }

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }
}
