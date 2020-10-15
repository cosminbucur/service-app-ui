import { StepTyresComponent } from './features/visits/components/stepper/step-tyres/step-tyres.component';
import { ReportsComponent } from './features/reports/reports.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { StorageComponent } from './features/storage/storage.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.VISITS, component: VisitsComponent },
  { path: appRoutesNames.VISIT_DETAILS, component: VisitDetailsComponent },
  { path: appRoutesNames.STEP_TYRES, component: StepTyresComponent },
  { path: appRoutesNames.STORAGE, component: StorageComponent },
  { path: appRoutesNames.USERS, component: UsersComponent },
  { path: appRoutesNames.USER_DETAILS, component: UserDetailsComponent },
  { path: appRoutesNames.REPORTS, component: ReportsComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
