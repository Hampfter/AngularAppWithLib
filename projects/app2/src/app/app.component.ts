import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyLibService } from '../../../my-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'MHN';

  constructor(myLibService: MyLibService){
    myLibService.logSomething('Hello from app2!');
  }
}
