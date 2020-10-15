import { StepTyresComponent } from './features/visits/components/stepper/step-tyres/step-tyres.component';
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
import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';
import { StorageComponent } from './features/storage/storage.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { ReportsComponent } from './features/reports/reports.component';
import { BrandChartComponent } from './features/reports/brand-chart/brand-chart.component';
import { SizeChartComponent } from './features/reports/size-chart/size-chart.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { CustomerDetailsComponent } from './features/visits/pages/customer-details/customer-details.component';
import { CustomerSearchComponent } from './features/visits/components/customer-search/customer-search.component';
import { MechanicSearchComponent } from './features/visits/components/mechanic-search/mechanic-search.component';
import { StepCustomerComponent } from './features/visits/components/stepper/step-customer/step-customer.component';
import { StepServiceComponent } from './features/visits/components/stepper/step-service/step-service.component';
import { StepSummaryComponent } from './features/visits/components/stepper/step-summary/step-summary.component';
import { CustomerDialogComponent } from './features/visits/components/dialogs/customer-dialog/customer-dialog.component';
import { TyreDialogComponent } from './features/visits/components/dialogs/tyre-dialog/tyre-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    // visits
    VisitsComponent,

    VisitDetailsComponent,
    StepCustomerComponent,
    StepServiceComponent,
    StepTyresComponent,
    StepSummaryComponent,

    CustomerDialogComponent,

    // tyres
    TyreDetailsComponent,
    TyreCardComponent,

    StorageComponent,

    // users
    UsersComponent,
    UserDetailsComponent,

    ReportsComponent,
    BrandChartComponent,
    SizeChartComponent,

    // customers
    CustomerDetailsComponent,
    CustomerSearchComponent,

    // mechanics
    MechanicSearchComponent,

    TyreDialogComponent,
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
