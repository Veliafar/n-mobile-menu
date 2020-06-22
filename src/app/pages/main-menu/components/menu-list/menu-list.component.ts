import { Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainMenuHttpService } from '../../services/main-menu-http.service';
import { MenuList } from '@shared/models/menu-list.model';

export const NOMIA_MENU_LIST = 'NOMIA_MENU_LIST';
export const NOMIA_MENU_LIST_LINK = './assets/menu.json';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  menu: MenuList[] = [];

  constructor(
    private menuHttp: MainMenuHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setMenuData();
  }

  setMenuData(): void {
    localStorage.getItem(NOMIA_MENU_LIST)
      ? this.menu = JSON.parse(localStorage.getItem(NOMIA_MENU_LIST))
      : this.getMenuData(NOMIA_MENU_LIST_LINK)
      ;
  }

  getMenuData(link: string): void {
    this.menuHttp.getStaticListData(link)
      .pipe(
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe(
        data => {
          this.menu = data;
          localStorage.setItem(NOMIA_MENU_LIST, JSON.stringify(data));
        }
      );
  }

  toAddPosition(): void {
    this.router.navigateByUrl('main-menu/add-position');
  }

  toAddSection(): void {
    this.router.navigateByUrl('main-menu/add-section');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
