import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-utils-default-error',
  template: `Error`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
