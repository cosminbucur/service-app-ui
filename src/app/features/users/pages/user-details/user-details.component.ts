import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { appRoutesNames } from 'src/app/app.routes.names';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public form: FormGroup;

  public user: any = {
    id: null,
    username: null,
    email: null,
    phone: null,
    firstName: null,
    lastName: null,
    role: null,
    active: false
  };

  public color: ThemePalette = 'accent';
  public checked = false;
  public disabled = false;

  public roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'operator', viewValue: 'Operator' }
  ];

  public selectedRole: string;

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the user fields!');
      return;
    }

    this.notificationService.success('User details saved.');
  }

  public cancel() {
    this.goToUsersPage();
  }

  public resetPassword() {
    this.notificationService.info('Notification sent.');
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.form = new FormGroup({
      username:     new FormControl(this.user.firstName, Validators.required),
      email:        new FormControl(this.user.email, [Validators.pattern(emailPattern), Validators.required]),
      phone:        new FormControl(this.user.phone, [Validators.pattern(phonePattern), Validators.required]),
      firstName:    new FormControl(this.user.firstName, Validators.required),
      lastName:     new FormControl(this.user.lastName, Validators.required),
      role:         new FormControl(this.user.role, Validators.required),
      active:       new FormControl(this.user.active)
    });
  }

  private goToUsersPage() {
    this.router.navigate([`/${appRoutesNames.USERS}`]);
  }

  public toggleActive() {
    this.notificationService.info('User activated successfully.');
  }

}
