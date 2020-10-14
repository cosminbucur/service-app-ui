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

  public customerDetails: any = {
    firstName: 'Alex',
    lastName: 'Vasile',
    company: 'Ibm',
    phoneNumber: '0722 333 444',
    email: 'alex@gmail.com',
    licensePlate: 'B123BOS'
  };

  public serviceDetails: any = {
    visitDate: Date.now(),
    mechanicName: 'Nea Gigi',
    servicesPerformed: 'schimb complet',
    observations: 'e bine ca nu e rau'
  };

  public tyre: any = {
    id: null,
    width: null,
    height: null,
    diameterType: null,
    rimType: 'plate',
    tyreType: 'regular',
    brand: null,
    wearLevel: 'medium',
    season: 'summer'
  };

  public storagePoint = 'R1E1E1';

  public onCarData = [
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 }
  ];

  public inStorageData = [
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental', rimType: 'alloy', tyreType: 'regular', wearLevel: 'medium', capsNo: 4 }
  ];

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initializeData();
    this.form = new FormGroup({});
  }

  public cancel() {
    this.goToVisitsPage();
  }

  public print() {
    this.notificationService.info('Printing in progress.');
  }

  public sendEmail() {
    this.notificationService.info('Email sent to ' + this.customerDetails.email);
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

  private async initializeData() {

  }

}
