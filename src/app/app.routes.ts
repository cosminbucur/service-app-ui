import { ReportsComponent } from './features/reports/reports.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { StorageComponent } from './features/storage/storage.component';
import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { TyreDetailsComponent } from './features/tyres/pages/tyre-details/tyre-details.component';
import { CreateVisitComponent } from './features/visits/pages/create-visit/create-visit.component';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.VISITS, component: VisitsComponent },
  { path: appRoutesNames.CREATE_VISIT, component: CreateVisitComponent },
  { path: appRoutesNames.VISIT_DETAILS, component: VisitDetailsComponent },
  { path: appRoutesNames.TYRE_DETAILS, component: TyreDetailsComponent },
  { path: appRoutesNames.TYRE_CARD, component: TyreCardComponent },
  { path: appRoutesNames.STORAGE, component: StorageComponent },
  { path: appRoutesNames.USERS, component: UsersComponent },
  { path: appRoutesNames.USER_DETAILS, component: UserDetailsComponent },
  { path: appRoutesNames.REPORTS, component: ReportsComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
