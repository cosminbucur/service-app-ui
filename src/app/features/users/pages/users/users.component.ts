import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { appRoutesNames } from 'src/app/app.routes.names';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any[] = [
    {
      username: 'alexd',
      password: 'boss',
      email: 'alexdragomir@gmail.com',
      firstName: 'alex',
      lastName: 'dragomir',
      role: 'admin',
      active: true
    },
    {
      username: 'alexv',
      password: 'secret',
      email: 'alexvasile@gmail.com',
      firstName: 'alex',
      lastName: 'vasile',
      role: 'operator',
      active: true
    }
  ];

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  public goToDetails() {
    this.router.navigate([`/${appRoutesNames.USER_DETAILS}`]);
  }

}
