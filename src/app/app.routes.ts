import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { TyresComponent } from './features/tyres/tyres.component';
import { TyreDetailsComponent } from './features/tyre-details/tyre-details.component';
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
  { path: appRoutesNames.TYRES, component: TyresComponent },
  { path: appRoutesNames.TYRE_DETAILS, component: TyreDetailsComponent },
  { path: appRoutesNames.TYRE_CARD, component: TyreCardComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
