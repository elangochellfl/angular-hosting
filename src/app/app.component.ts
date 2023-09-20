import { splitAtColon } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hosting-project';
  href: string = "https://angular.io/tutorial";
  message: string = "I am in Guduvanchery";
  message2: string = "CLI Documentation from component - updated";
  myStyles = {
    'color': '#FFFFFF',
    'background-color': 'blue',
    'font-style': 'italic'
  }

  ngOnInit(): void {
    // setTimeout (() => { 
    //   this.reverseText();
    // }, 1000);
    
  }
  reverseText() {
    let text: string = "hi this is my world!!!";
    //this.message = text.split(' ').reverse().join(' ');
    this.message = text.split(' ').reverse().join(' ').split('').reverse().join('');
    document.write(this.message);
  }
}
