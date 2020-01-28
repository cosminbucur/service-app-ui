import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    MaterialModule,
    RouterModule,
  ],
  providers: []
})
export class SharedModule { }
