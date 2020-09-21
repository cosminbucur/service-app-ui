import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';
import { TyreDetailsComponent } from './features/tyres/pages/tyre-details/tyre-details.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';
import { StorageComponent } from './features/storage/storage.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { ReportsComponent } from './features/reports/reports.component';
import { BrandChartComponent } from './features/reports/brand-chart/brand-chart.component';
import { SizeChartComponent } from './features/reports/size-chart/size-chart.component';
import { CreateVisitComponent } from './features/visits/pages/create-visit/create-visit.component';
import { CustomerDetailsComponent } from './features/visits/pages/customer-details/customer-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitsComponent,
    TyreDetailsComponent,
    VisitDetailsComponent,
    TyreCardComponent,
    StorageComponent,
    UsersComponent,
    UserDetailsComponent,
    ReportsComponent,
    BrandChartComponent,
    SizeChartComponent,
    CreateVisitComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    appRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
