import { NgModule } from '@angular/core';
import {
  MatMenuModule,
  MatDialogModule,
  MatTabsModule,
  MatBadgeModule,
  MatExpansionModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonToggleModule,
  MatListModule,
  MatDividerModule,
  MatSelectModule,
  MatPaginatorModule,
  MatRadioModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule {}
