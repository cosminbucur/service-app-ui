import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatIconModule
  ],

  exports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
