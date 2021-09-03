import { MockData } from 'src/app/shared/mocks/mocks';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VisitService } from '../../../../../core/services/visits.service';
import { CustomerVisit } from 'src/app/shared/models/visit.model';

@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  @Input() visit: CustomerVisit;

  form: FormGroup;

  private mockData: MockData = new MockData();
  customerDetails: any = this.mockData.customerDetails;
  serviceDetails: any = this.mockData.serviceDetails;
  storagePoint = this.mockData.storagePoint;
  capsNo = this.mockData.capsNo;
  onCarData = this.mockData.onCarData;
  inStorageData = this.mockData.inStorageData;

  constructor(
    private notificationService: NotificationService,
    private visitService: VisitService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("visit", this.visit);
    
    this.form = new FormGroup({});
  }

  // actions

  print() {
    this.notificationService.info('Printing in progress.');
  }

  toggleActive() {
    this.notificationService.info('Customer activated');
    this.visit.customer.isActive = !this.visit.customer.isActive;
  }

  sendEmail() {
    this.notificationService.info('Email sent to ' + this.customerDetails.email);
  }

  // navigation actions

  cancel() {
    this.goToVisitsPage();
  }

  async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the visit fields!');
      return;
    }

    if (!this.visit.id) {
      this.createVisit();
    }
  }

  // private methods

  private createVisit() {
    this.visitService.create(this.visit)
      .subscribe(
        (visit: CustomerVisit) => this.handleVisitSaveResponse(visit),
        err => this.handleVisitSaveError(err)
      );
  }

  private handleVisitSaveResponse(visit: CustomerVisit) {
    this.notificationService.success('Visit details saved.');
  }

  private handleVisitSaveError(err) {
    console.log(err);
    this.notificationService.error('There was a problem - please contact support');
  }

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }

}
