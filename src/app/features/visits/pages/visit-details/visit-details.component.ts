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

  public isLinear = false;

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

  // TODO remove this
  public form: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {

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
