import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any[];

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  public ngOnInit(): void {
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  public goToDetails() {
    this.router.navigate([`/${appRoutesNames.USER_DETAILS}`]);
  }

}
