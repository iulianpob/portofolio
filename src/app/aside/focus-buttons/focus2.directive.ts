import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusStateButtons]'
})
export class FocusStateButtonsDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    const buttons = this.el.nativeElement.querySelectorAll('button');
    buttons.forEach((button: { classList: { remove: (arg0: string) => void; }; }) => {
      button.classList.remove('focus');
    });
    target.classList.add('focus');
  }
}
