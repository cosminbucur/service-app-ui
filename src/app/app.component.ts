import { appRoutesNames } from './app.routes.names';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-app-ui';
  public appRoutesNames;

  constructor(){
    this.appRoutesNames = appRoutesNames;
  }
}
