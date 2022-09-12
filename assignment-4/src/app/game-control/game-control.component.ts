import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>();
  interval: any;
  lastSeenValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastSeenValue + 1);
      this.lastSeenValue ++;
    },1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
