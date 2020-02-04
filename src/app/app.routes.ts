import { CustomerVisitComponent } from './features/customer-visit/customer-visit.component';

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { StoragepointComponent } from './features/storagepoint/storagepoint.component';

export const appRoutes: Routes = [
    { path: appRoutesNames.STORAGEPOINT, component: StoragepointComponent},
    { path: appRoutesNames.CUSTOMER_VISIT, component: CustomerVisitComponent},
    { path: '', pathMatch: 'full', redirectTo: 'app' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
