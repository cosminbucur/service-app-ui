import { Component } from '@angular/core';
import { appRoutesNames } from './app.routes.names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-app-ui';

  public appRoutesNames;
  public currentUser = 'Test User';

  constructor() {
    this.appRoutesNames = appRoutesNames;
  }
}
