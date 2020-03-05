import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { ListVisitComponent } from './features/list-visit/list-visit.component';
import { TyreDetailsComponent } from './features/tyre-details/tyre-details.component';
import { ListTyresComponent } from './features/list-tyres/list-tyres.component';
import { VisitDetailsComponent } from './features/visit-details/visit-details.component';
import { TyreCardComponent } from './features/tyre-card/tyre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListVisitComponent,
    TyreDetailsComponent,
    ListTyresComponent,
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
