import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CustomerVisit } from '../../../../shared/models/visit.model';
import { NotificationService } from '../../../../core/services/notification.service';
import { VisitService } from '../../../../core/services/visits.service';
import { StepCustomerComponent } from '../../components/stepper/step-customer/step-customer.component';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

  currentStepIndex: number = 0;

  @ViewChild(StepCustomerComponent) stepCustomerComponent: StepCustomerComponent;

  @Input() visit: CustomerVisit;

  constructor(
    private notificationService: NotificationService,
    private visitService: VisitService
  ) {}

  public ngOnInit(): void { 
    this.visit = {} as CustomerVisit;
  }

  public onStepChange(event: any): void {
    let previousIndex: number = event.previouslySelectedIndex;
    let currentIndex: number = event.selectedIndex;

    this.currentStepIndex = currentIndex;

    this.stepCustomerComponent.populateVisit(this.visit);
  }
}
