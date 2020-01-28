import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { ListVisitComponent } from './features/list-visit/list-visit.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.VISIT, component: ListVisitComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
