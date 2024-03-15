import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './task1/child/child.component';
import { ParentComponent } from './task1/parent/parent.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { ChildCompComponent } from './task2/child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    Task1Component,
    Task2Component,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
