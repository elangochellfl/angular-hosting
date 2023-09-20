import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hosting-project';

  message: string = "I want to achieve ever after";
  message2: string = "CLI Documentation from component - updated";
  myStyles = {
    'color': '#FFFFFF',
    'background-color': 'blue',
    'font-style': 'italic'
  }
}
