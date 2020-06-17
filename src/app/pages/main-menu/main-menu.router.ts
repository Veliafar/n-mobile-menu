import { Routes } from '@angular/router';

import {
    MenuWrapperComponent
} from './components/menu-wrapper/menu-wrapper.component';

export const MainMenuRoutes: Routes = [
    {
        path: '',
        component: MenuWrapperComponent,
    },
    {
        path: '**',
        redirectTo: 'main-menu',
        pathMatch: 'full',
    }
];
