import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibComponent, XXXComponent } from '../../../my-lib/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MyLibComponent,
    XXXComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
