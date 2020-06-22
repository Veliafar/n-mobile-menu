import { AngularEnumsListModule } from './modules/enum-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularEnumsListModule.forRoot('enums')
  ],
  exports: [
    AngularEnumsListModule
  ]
})
export class SharedModule { }
