import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-4';
  oddValues: number[] = [];
  evenValues: number[] = [];
  
  onIntervalStarted(Value: number) {
    if (Value % 2 === 0) {
      this.evenValues.push(Value);
  } else {
    this.oddValues.push(Value);
  }
}

}
