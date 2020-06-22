import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AddMenuSectionComponent } from './components/add-menu-section/add-menu-section.component';
import { AddMenuPositionComponent } from './components/add-menu-position/add-menu-position.component';
import { RouterModule } from '@angular/router';
import { MainMenuRoutes } from './main-menu.router';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { UiModule } from '@app/ui/ui.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuWrapperComponent,
    MenuListComponent,
    AddMenuSectionComponent,
    AddMenuPositionComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MainMenuRoutes),
    UiModule,
    SharedModule
  ]
})
export class MainMenuModule { }
