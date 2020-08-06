import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { StructuralComponent } from './structural/structural.component';
import { StatefulModule } from './stateful/stateful.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { MatChipsModule } from '@angular/material/chips';
import { HoverDirective } from './hover/hover.directive';
import { HasPermissionDirective } from './hasPermission/has-permission.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    StructuralComponent,
    HomeComponent,
    DropdownDirective,
    HoverDirective,
    HasPermissionDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'attribute',
        component: AttributeComponent,
      },
      {
        path: 'structural',
        component: StructuralComponent,
      },
    ]),
    StatefulModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
