
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MenuList, Position } from '@shared/models/menu-list.model';

@Component({
  selector: 'dynamic-context-menu',
  templateUrl: './dynamic-context-menu.component.html',
  styleUrls: ['./dynamic-context-menu.component.scss']
})
export class DynamicContextMenuComponent implements OnInit {

  @Input() menuItem: MenuList | Position;

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  isMenuOpen = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.clickOutSide();
  }

  clickOutSide() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton?.nativeElement && e.target !== this.menu?.nativeElement) {
        this.isMenuOpen = false;
      }
    });
  }

  openListItemContext(item) {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(item);
  }

}
