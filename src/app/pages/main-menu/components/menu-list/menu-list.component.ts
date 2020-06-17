import { Component, OnInit } from '@angular/core';
import { MainMenuHttpService } from '../../services/main-menu-http.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menu = [];

  constructor(
    private menuHttp: MainMenuHttpService
  ) { }

  ngOnInit() {
    this.getMenuData('./assets/menu.json');
  }

  getMenuData(way: string) {
    this.menuHttp.getStaticListData(way)
      .subscribe(
        data => { 
          this.menu = data as string [];
          console.log(this.menu);
          
         }
      )
  }

}
