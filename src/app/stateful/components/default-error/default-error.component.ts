import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-utils-default-error',
  template: `<mat-icon aria-hidden="false" aria-label="Example home icon">error</mat-icon>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
