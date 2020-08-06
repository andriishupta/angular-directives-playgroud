import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('style.opacity') opacity: string;

  @HostBinding('attr.data-test') role = 'role';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  addStyles(): void {
    this.opacity = '0.5';
    // this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '0.5');
  }

  @HostListener('mouseleave')
  removeStyles(): void {
    this.opacity = '1';
    // this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '1');
  }
}
