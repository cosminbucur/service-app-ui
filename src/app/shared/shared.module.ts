import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    MatStepperModule,
    MatNativeDateModule
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    MaterialModule,
    RouterModule,
    MatStepperModule,
    MatNativeDateModule
  ],
  providers: []
})
export class SharedModule { }
