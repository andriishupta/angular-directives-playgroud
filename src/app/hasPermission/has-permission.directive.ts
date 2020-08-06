import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  AppService,
  AuthPermissions
} from '../app.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input() appHasPermission: AuthPermissions | AuthPermissions[];

  private subscription: Subscription;

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private appService: AppService,
  ) {
    console.log(this);
  }

  ngOnInit(): void {
    this.subscription = this.appService
      .hasPermission(this.appHasPermission)
      .subscribe(hasPermission => {
        this.vcr.clear();
        if (hasPermission) {
          this.vcr.createEmbeddedView(this.tpl);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
