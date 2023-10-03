import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContateComponent } from './contate/contate.component';



@NgModule({
  declarations: [
    ContateComponent
  ],
  exports:[ContateComponent],
  imports: [
    CommonModule
  ]
})
export class ContateNosModule { }
