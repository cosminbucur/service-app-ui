import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.scss']
})
export class ListVisitComponent implements OnInit {

  MOCK_DATA = [
    {customerId: 1, licensePlate: 'B32ABC', visitDate: Date.now(), seasonPassed: 'yes'},
    {customerId: 2, licensePlate: 'C32DEF', visitDate: Date.now(), seasonPassed: 'yes'},
    {customerId: 3, licensePlate: 'D32FOT', visitDate: Date.now(), seasonPassed: 'no'},
    {customerId: 4, licensePlate: 'C32DST', visitDate: Date.now(), seasonPassed: 'yes'},
  ];

  public inputForm: FormGroup;
  public dataSource: any;
  public displayedColumns: string[] = ['customerId', 'licensePlate', 'visitDate', 'seasonPassed'];

  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      licensePlates: new FormControl()
    });
    // TODO: replace with real data from a service
    this.dataSource = new MatTableDataSource(this.MOCK_DATA);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  // public onFindByLicensePlate(): void {
  //   console.log('searching license plate');
  //   this.toastr.success('Looking for license plate');
  // }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
