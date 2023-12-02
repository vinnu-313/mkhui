import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  show = true;
  delay = 0;
  pdelay = 0;
  isDelay = false;
  time = 0;
  ptime = 0;
  interval: any;
  min = '05';
  sec = '00';
  loop = true;
  constructor() { }

  init() {
    clearInterval(this.interval);
    this.show = false;
    this.time = this.ptime;
    this.delay = this.pdelay;
    this.isDelay = false;
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    if (this.time > 0) {
      if (this.time === 16) {
        const audio = new Audio('assets/airhorn.mp3');
        audio.play();
      }
      if (this.time === 1) {
        const audio = new Audio('assets/alarm.mp3');
        audio.play();
      }
      this.time -= 1;
      this.format(this.time);
    } else {
      if (this.loop) {
        if (this.delay > 0) {
          this.isDelay = true;
          this.delay -= 1;
          this.format(this.delay);
        } else {
          this.time = this.ptime;
          this.delay = this.pdelay;
          this.isDelay = false;
          this.show = false;
        }
      } else {
        this.stop();
      }
    }
  }

  stop() {
    this.show = true;
    clearInterval(this.interval);
  }

  format(now) {
    this.min = (now / 60 | 0).toString().padStart(2, '0');
    this.sec = (now % 60 | 0).toString().padStart(2, '0');
  }
}

