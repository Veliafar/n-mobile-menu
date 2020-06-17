import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { WrapperComponent } from '@wrapper/components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'main-menu',
        loadChildren: './pages/main-menu/main-menu.module#MainMenuModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'main-menu',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export class LazyRoutePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preload: Function): Observable<any> {
      if (route.data && route.data.preload) {
          return preload();
      } else {
          return of(null);
      }
  }
}

