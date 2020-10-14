import { StepTyresComponent } from './features/visits/pages/step-tyres/step-tyres.component';
import { MechanicSearchComponent } from './features/visits/components/mechanic-search/mechanic-search.component';
import { CustomerSearchComponent } from './features/visits/components/customer-search/customer-search.component';
import { CustomerDetailsComponent } from './features/visits/pages/customer-details/customer-details.component';
import { ReportsComponent } from './features/reports/reports.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { StorageComponent } from './features/storage/storage.component';
import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';
import { TyreDetailsComponent } from './features/tyres/pages/tyre-details/tyre-details.component';
import { VisitDetails2Component } from './features/visits/pages/visit-details2/visit-details2.component';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.VISITS, component: VisitsComponent },
  { path: appRoutesNames.VISIT_DETAILS2, component: VisitDetails2Component },
  { path: appRoutesNames.STEP_TYRES, component: StepTyresComponent },
  { path: appRoutesNames.CUSTOMER_DETAILS, component: CustomerDetailsComponent },
  { path: appRoutesNames.TYRE_DETAILS, component: TyreDetailsComponent },
  { path: appRoutesNames.TYRE_CARD, component: TyreCardComponent },
  { path: appRoutesNames.STORAGE, component: StorageComponent },
  { path: appRoutesNames.USERS, component: UsersComponent },
  { path: appRoutesNames.USER_DETAILS, component: UserDetailsComponent },
  { path: appRoutesNames.REPORTS, component: ReportsComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
