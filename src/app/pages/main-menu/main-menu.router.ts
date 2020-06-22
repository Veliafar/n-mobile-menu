import { Routes } from '@angular/router';

import {
    MenuWrapperComponent,
    AddMenuPositionComponent,
    AddMenuSectionComponent,
    MenuListComponent
} from './components';

export const MainMenuRoutes: Routes = [
    {
        path: 'main-menu',
        component: MenuWrapperComponent,
        children: [
            {
                path: 'add-position',
                component: AddMenuPositionComponent,
            },
            {
                path: 'add-section',
                component: AddMenuSectionComponent
            },
            {
                path: '',
                component: MenuListComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'main-menu',
        pathMatch: 'full',
    }
];
