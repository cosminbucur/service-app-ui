import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { VisitsComponent } from './features/visits/pages/visits/visits.component';
import { TyreDetailsComponent } from './features/tyre-details/tyre-details.component';
import { TyresComponent } from './features/tyres/tyres.component';
import { VisitDetailsComponent } from './features/visits/pages/visit-details/visit-details.component';
import { TyreCardComponent } from './features/visits/components/tyre-card/tyre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitsComponent,
    TyreDetailsComponent,
    TyresComponent,
    VisitDetailsComponent,
    TyreCardComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
