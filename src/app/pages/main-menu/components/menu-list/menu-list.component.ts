import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { MainMenuHttpService } from '../../services/main-menu-http.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, AfterViewInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  menu = [];

  @ViewChildren('menuList') menuListNgFor: QueryList<ElementRef>;

  constructor(
    private menuHttp: MainMenuHttpService
  ) { }

  ngOnInit() {
    this.getMenuData('./assets/menu.json');
  }

  ngAfterViewInit() {
    // this.menuListNgForTrackBy();
  }

  getMenuData(link: string) {
    this.menuHttp.getStaticListData(link)
      .pipe(
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe(
        data => {
          this.prepareMenuListData(data);
        }
      );
  }

  prepareMenuListData(data) {
    data = [...data];
    data.map((el, index) => {
      el.id = (Math.floor(Date.now() * (index + 1) / 1000));
      el.opened = false;
    });

    this.menu = data;
    console.log(this.menu);
  }


  toggleMenu(item) {
    item.opened = !item.opened;
  }

  // trackBy: firstLevelTrackByFn;

  // menuListNgForTrackBy() {
  //   this.menuListNgFor.changes.subscribe(
  //     el => {
  //       console.log(el);
  //     }
  //   );
  // }

  firstLevelTrackByFn(item) {
    // return item.id;

    // console.log(item);


    // timer(0).subscribe(() => {
    //   this.notifications.notificationCheck();
    // });
    // console.log(this.rusToLatin(item.name));
    // this.listToggle[item.name]
    //   ? this.listToggle[item.name] = !this.listToggle[item.name]
    //   : this.listToggle[item.name] = true
    //   ;
    // return item.id;
  }


  rusToLatin(str) {

    const ru = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
      'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
      'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_str = [];

    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

    for (let i = 0; i < str.length; ++i) {
      n_str.push(
        ru[str[i]]
        || ru[str[i].toLowerCase()] === undefined && str[i]
        || ru[str[i].toLowerCase()].replace(/^(.)/, function (match) { return match.toUpperCase(); })
      );
    }

    return n_str.join('');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
