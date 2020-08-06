import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  addStyles(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '0.5');
  }

  @HostListener('mouseleave')
  removeStyles(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '1');
  }
}
