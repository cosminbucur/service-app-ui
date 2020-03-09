import { NotificationService } from './../../../../core/services/notification.service';
import { appRoutesNames } from './../../../../app.routes.names';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

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

  onCarData = [
    'Front left - Summer',
    'Front right - Summer',
    'Rear left - Summer',
    'Rear right - Summer'
  ];

  inStorageData = [
    'Front left - Winter',
    'Front right - Winter',
    'Rear left - Winter',
    'Rear right - Winter'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    this.form = new FormGroup({
      visitDate:    new FormControl(this.visit.visitDate, Validators.required),
      firstName:    new FormControl(this.visit.firstName, Validators.required),
      lastName:     new FormControl(this.visit.lastName, Validators.required),
      company:      new FormControl(this.visit.company, Validators.required),
      phone:        new FormControl(this.visit.phone, Validators.pattern('\\d{10}')),
      // TODO try Validators.email
      email:        new FormControl(this.visit.email, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')),
      licensePlate: new FormControl(this.visit.licensePlate, Validators.required)
    });
  }

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }

  public cancel() {
    this.goToVisitsPage();
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the experience fields!');
      return;
    }

    this.notificationService.success('Visit details saved.');
  }

  public print() {
    this.notificationService.info('Printing in progress.');
  }

  public toggleActive() {
    this.notificationService.info('Customer activated');
  }

  get firstName(): any {
    return this.form.get('firstName');
  }

}
