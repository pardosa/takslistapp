import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule}		 from '@angular/http';
import { FormsModule } 	 from '@angular/forms';
import {AppComponent}	 from '../app/app.component';
import {TaskComponent}	 from '../app/components/tasks/tasks.components';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations:	[AppComponent, TaskComponent],
  bootstrap:	[AppComponent]
})
export class AppModule { }