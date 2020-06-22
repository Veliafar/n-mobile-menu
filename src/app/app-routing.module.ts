import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { MainMenuModule } from './pages/main-menu/main-menu.module';

export class LazyRoutePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preload: Function): Observable<any> {
    if (route.data && route.data.preload) {
      return preload();
    } else {
      return of(null);
    }
  }
}

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/main-menu/main-menu.module#MainMenuModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: LazyRoutePreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [LazyRoutePreloadingStrategy]
})
export class AppRoutingModule { }




