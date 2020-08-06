import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of
} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  $permission = new BehaviorSubject<AuthPermissions>('user');

  constructor() { }

  hasPermission(permissions: AuthPermissions | AuthPermissions[] = []): Observable<boolean> {
    return this.$permission.pipe(
      map((permission) => (permissions.concat ? permissions : [permissions]).includes(permission)),
    );
  }
}

export type AuthPermissions = 'admin' | 'user' | 'incognito';
