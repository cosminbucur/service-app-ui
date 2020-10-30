import { MockData } from 'src/app/shared/mocks/mocks';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  public form: FormGroup;

  private mockData: MockData = new MockData();
  public customerDetails: any = this.mockData.customerDetails;
  public serviceDetails: any = this.mockData.serviceDetails;
  public storagePoint = this.mockData.storagePoint;
  public capsNo = this.mockData.capsNo;
  public onCarData = this.mockData.onCarData;
  public inStorageData = this.mockData.inStorageData;

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initializeData();
    this.form = new FormGroup({});
  }

  // actions

  public print() {
    this.notificationService.info('Printing in progress.');
  }

  public toggleActive() {
    this.notificationService.info('Customer activated');
  }

  public sendEmail() {
    this.notificationService.info('Email sent to ' + this.customerDetails.email);
  }

  // navigation actions

  public cancel() {
    this.goToVisitsPage();
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the visit fields!');
      return;
    }

    this.notificationService.success('Visit details saved.');
  }

  // private methods

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }

  private async initializeData() {

  }

}
