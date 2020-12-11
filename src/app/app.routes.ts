import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './features/login/login.component';
import { StepTyresComponent } from './features/visits/components/stepper/step-tyres/step-tyres.component';
import { ReportsComponent } from './features/reports/reports.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { UsersComponent } from './features/users/pages/users/users.component';
import { StorageComponent } from './features/storage/storage.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { HomeComponent } from './features/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';
import { RegisterComponent } from './features/register/register.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.VISITS, component: VisitsComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.VISIT_DETAILS, component: VisitDetailsComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.STEP_TYRES, component: StepTyresComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.STORAGE, component: StorageComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.USERS, component: UsersComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.USER_DETAILS, component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.REPORTS, component: ReportsComponent, canActivate: [AuthGuard] },
  { path: appRoutesNames.LOGIN, component: LoginComponent },
  { path: appRoutesNames.REGISTER, component: RegisterComponent },
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

export const appRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
