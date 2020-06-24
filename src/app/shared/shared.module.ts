import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartsModule } from 'ng2-charts';
import { TextMaskModule } from 'angular2-text-mask';
import { MatStepperModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    DragDropModule,
    ChartsModule,
    TextMaskModule
    MatStepperModule,
    MatNativeDateModule
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,

    // 3rd party components
    MaterialModule,
    RouterModule,
    ChartsModule,
    TextMaskModule
    MatStepperModule,
    MatNativeDateModule
  ],
  providers: []
})
export class SharedModule { }
