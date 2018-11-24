import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  time = 240;
  min = '00';
  sec = '00';
  // config;
  // @ViewChild(CountdownComponent) counter: CountdownComponent;
  constructor() {
    //   const vm = this;
    //   vm.config = {
    //     leftTime: 10
    //   };
    this.init();
  }

  init() {
    setInterval(() => {
      if (this.time > 0) {
        if (this.time === 60) {
          const audio = new Audio('../../assets/airhorn.mp3');
          audio.play();
        }
        this.time -= 1;
        this.format(this.time);
      } else {
        const audio = new Audio('../../assets/alarm.mp3');
        audio.play();
        this.time = 240;
      }
    }, 1000);
  }
  format(now) {
    this.min = (now / 60 | 0).toString().padStart(2, '0');
    this.sec = (now % 60 | 0).toString().padStart(2, '0');
  }
  // ngAfterViewInit() {
  //   const vm = this;
  //   // vm.counter.begin();
  // }
  // start() {
  //   const vm = this;
  //   vm.counter.begin();
  // }
  // restart() {
  //   const vm = this;
  //   window.location.reload();
  // }
  // onStart() {
  //   console.log('Started at ' + Date.now());
  // }
  // onFinished() {
  //   const vm = this;
  //   vm.counter.restart();
  //   console.log('Finished at ' + Date.now());
  // }
}

