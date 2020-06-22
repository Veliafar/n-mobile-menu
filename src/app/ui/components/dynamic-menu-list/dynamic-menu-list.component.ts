
import { Component, OnInit, Input } from '@angular/core';
import { MenuList, Position } from '@shared/models/menu-list.model';

@Component({
  selector: 'dynamic-menu-list',
  templateUrl: './dynamic-menu-list.component.html',
  styleUrls: ['./dynamic-menu-list.component.scss']
})
export class DynamicMenuListComponent implements OnInit {

  @Input() menu;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(item: MenuList | Position) {
    item.opened = !item.opened;

    this.setId(item);
  }

  setId(item): void {
    const array = new Uint32Array(10);
    const random = Math.floor(0 + Math.random() * (9 + 1 - 0));

    if (!item.id) {
      item.id = (Math.floor(Date.now() * (window.crypto.getRandomValues(array)[random]) / 100000));
    }
  }

}
