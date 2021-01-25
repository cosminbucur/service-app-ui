import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CustomerVisit } from '../../../../shared/models/visit.model';
import { NotificationService } from '../../../../core/services/notification.service';
import { VisitService } from '../../../../core/services/visits.service';
import { StepCustomerComponent } from '../../components/stepper/step-customer/step-customer.component';
import { StepServiceComponent } from '../../components/stepper/step-service/step-service.component';
import { StepTyresComponent } from '../../components/stepper/step-tyres/step-tyres.component';
import { StepSummaryComponent } from '../../components/stepper/step-summary/step-summary.component';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

  currentStepIndex: number = 0;

  @ViewChild(StepCustomerComponent) stepCustomerComponent: StepCustomerComponent;
  @ViewChild(StepServiceComponent) stepServiceComponent: StepServiceComponent;
  @ViewChild(StepTyresComponent) stepTyresComponent: StepTyresComponent;
  @ViewChild(StepSummaryComponent) stepSummaryComponent: StepSummaryComponent;

  @Input() visit: CustomerVisit;

  constructor(
    private notificationService: NotificationService,
    private visitService: VisitService
  ) {}

  ngOnInit() { 
    this.visit = {
      visitDate: new Date(),
      customer: {},
      storagePoint: {}
    } as CustomerVisit;
  }

  onStepChange(event: any) {
    let previousIndex: number = event.previouslySelectedIndex;
    let currentIndex: number = event.selectedIndex;

    this.currentStepIndex = currentIndex;

    this.stepCustomerComponent.populateVisit(this.visit);
    this.stepServiceComponent.populateVisit(this.visit);
    this.stepTyresComponent.populateVisit(this.visit);
    this.stepSummaryComponent.visit = this.visit;
  }
}
