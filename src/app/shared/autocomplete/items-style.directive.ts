import {Directive, ElementRef, HostListener} from '@angular/core';
import '../../variables.less';

@Directive({
  selector: '[appItemsStyle]'
})
export class ItemsStyleDirective {

  constructor(public element: ElementRef) {
    element.nativeElement.style.color = '#F40009';
    element.nativeElement.style.fontWeight = 500;
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.element.nativeElement.style.backgroundColor = 'lightgray';
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.element.nativeElement.style.backgroundColor = 'Transparent';
  }
}
