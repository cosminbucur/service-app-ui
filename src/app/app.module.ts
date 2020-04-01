import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { ListVisitComponent } from './features/list-visit/list-visit.component';
import { CreateVisitComponent } from './features/create-visit/create-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListVisitComponent,
    CreateVisitComponent,

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
