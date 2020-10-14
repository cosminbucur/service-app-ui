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

  // TODO remove this
  public form: FormGroup;

  ngOnInit(): void { }

}
