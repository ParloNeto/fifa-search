import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appUpperCase]',
    standalone: true
})
export class UpperCaseDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }
}
