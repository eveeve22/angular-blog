import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    SobreComponent
  ],
  exports:[SobreComponent],
  imports: [
    CommonModule
  ]
})
export class SobreNosModule { }
