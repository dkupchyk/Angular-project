import {Directive, ElementRef, HostListener} from '@angular/core';
import '../../variables.less';
import {COLOR_BLACK, COLOR_LIGHTGRAY, COLOR_TRANSPARENT, FONT_WEIGHT_500} from './constants/item-style.constants';

@Directive({
  selector: '[appItemsStyle]'
})
export class ItemsStyleDirective {

  constructor(public element: ElementRef) {
    if (element.nativeElement) {
      element.nativeElement.style.color = COLOR_BLACK;
      element.nativeElement.style.fontWeight = FONT_WEIGHT_500;
    }
  }

  @HostListener('mouseover') onMouseOver(): void {
    if (this.element.nativeElement) {
      this.element.nativeElement.style.backgroundColor = COLOR_LIGHTGRAY;
    }
  }

  @HostListener('mouseout') onMouseOut(): void {
    if (this.element.nativeElement) {
      this.element.nativeElement.style.backgroundColor = COLOR_TRANSPARENT;
    }
  }
}
