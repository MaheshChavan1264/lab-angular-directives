import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-attribute-app';
  colorClass = 'blue';
  color1 = {
    color: 'green',
  };

  setColor(): void {
    this.colorClass = this.colorClass;
  }

}
