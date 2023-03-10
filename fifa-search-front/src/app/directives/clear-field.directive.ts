import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClearField]'
})
export class ClearFieldDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.value = '';
  }

}
