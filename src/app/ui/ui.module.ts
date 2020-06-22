import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicMenuListComponent } from './components';
import { DynamicContextMenuComponent } from './components/dynamic-context-menu/dynamic-context-menu.component';
import { ColorPickerModule } from './modules/color-picker/color-picker.module';

const DECLARATIONS = [
  DynamicMenuListComponent,
  DynamicContextMenuComponent
];

const MODULES = [
  ColorPickerModule
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...DECLARATIONS,
    ...MODULES
  ]
})
export class UiModule { }
