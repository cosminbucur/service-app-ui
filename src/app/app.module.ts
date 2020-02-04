import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoragepointComponent } from './features/storagepoint/storagepoint.component';
import { CustomerVisitComponent } from './features/customer-visit/customer-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    StoragepointComponent,
    CustomerVisitComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
