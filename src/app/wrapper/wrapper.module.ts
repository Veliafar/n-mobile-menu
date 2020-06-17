import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WrapperComponent,
      }
    ]),
  ]
})
export class WrapperModule { }
