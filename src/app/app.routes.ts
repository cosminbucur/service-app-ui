import { TyreCardComponent } from './features/tyre-card/tyre-card.component';
import { VisitDetailsComponent } from './features/visit-details/visit-details.component';
import { ListTyresComponent } from './features/list-tyres/list-tyres.component';
import { TyreDetailsComponent } from './features/tyre-details/tyre-details.component';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { ListVisitComponent } from './features/list-visit/list-visit.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.VISITS, component: ListVisitComponent },
  { path: appRoutesNames.VISIT_DETAILS, component: VisitDetailsComponent },
  { path: appRoutesNames.TYRES, component: ListTyresComponent },
  { path: appRoutesNames.TYRE_DETAILS, component: TyreDetailsComponent },
  { path: appRoutesNames.TYRE_CARD, component: TyreCardComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
