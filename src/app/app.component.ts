import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTime: any = '';

  title = 'Time Event BUG';

  handleTimeSetEvent(time: any): void {
    console.log(time);
    this.selectedTime = time;
  }
}
