import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugestaoComponent } from './sugestao/sugestao.component';



@NgModule({
  declarations: [
    SugestaoComponent
  ], exports:[SugestaoComponent],
  imports: [
    CommonModule
  ]
})
export class SugestoesModule { }
