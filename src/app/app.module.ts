import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MyListComponent } from './my-list/my-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FormsModule } from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PeopleListComponent,
    CourseListComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    NoopAnimationsModule,

    DynamicModule.withComponents([PeopleListComponent, CourseListComponent, MyListComponent])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
