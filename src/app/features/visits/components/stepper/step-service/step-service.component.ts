import { CustomerDialogComponent } from './../../dialogs/customer-dialog/customer-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-step-service',
  templateUrl: './step-service.component.html',
  styleUrls: ['./step-service.component.scss']
})
export class StepServiceComponent implements OnInit {

  public form: FormGroup;

  public serviceDetails: any = {
    visitDate: null,
    mechanicName: null,
    servicesPerformed: null,
    observations: null
  };

  private dialogRef;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.initializeData();
    this.createForm();
  }

  public openDialog(): void {
    // TODO open mechanic dialog
    this.dialogRef = this.dialog.open(CustomerDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  // private methods

  private async initializeData() {

  }

  private createForm() {
    this.form = this.fb.group({
      mechanicName: ['', Validators.required],
      servicesPerformed: ['', Validators.required],
      observations: ['']
    });
  }
}

