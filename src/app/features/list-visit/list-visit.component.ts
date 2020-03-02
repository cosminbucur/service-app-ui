import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.scss']
})
export class ListVisitComponent implements OnInit {

  public inputForm: FormGroup;

  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      licensePlates: new FormControl()
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  public onFindByLicensePlate(): void {
    console.log('searching license plate');
    this.toastr.success('Looking for license plate');
  }

}
