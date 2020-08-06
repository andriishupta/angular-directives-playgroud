import { Component, OnInit } from '@angular/core';
import { ResultState } from '../stateful/stateful';
import {
  Observable,
  of
} from 'rxjs';
import {
  defaultIfEmpty,
  delay,
  mapTo,
  startWith,
  switchMap,
  switchMapTo
} from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppService } from '../app.service';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  loadingState: ResultState = { isLoading: true, error: false, result: null };
  errorState: ResultState = { isLoading: false, error: { message: 'Error happened' }, result: null };
  resultState$: Observable<ResultState> = of({ isLoading: false, error: false, result: { message: 'Result' } }).pipe(
    delay(5000),
    startWith(this.loadingState),
  );

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
  }

  changePermission({ checked }: MatSlideToggleChange): void {
    this.appService.$permission.next(checked ? 'admin' : 'user');
  }

}
