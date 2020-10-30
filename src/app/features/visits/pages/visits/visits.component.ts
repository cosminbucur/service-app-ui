import { Component, OnInit } from '@angular/core';
import { VisitsService } from 'src/app/core/services/visits.service';
import { CustomerVisit } from 'src/app/shared/models/visit.model';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  public displayedColumns = ['visitDate', 'services'];
  public customerVisits: CustomerVisit[] = [];

  constructor(private visitsService: VisitsService) { }

  public ngOnInit(): void {
    this.fetchVisits();
  }

  private fetchVisits() {
    this.visitsService.getAll().subscribe(data => {
      this.customerVisits = data;
      console.log('customerVisits', this.customerVisits);
    });
  }
}
