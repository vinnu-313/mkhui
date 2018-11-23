import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewInit {

  config;
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  constructor() {
    const vm = this;
    vm.config = {
      leftTime: 10,
      demand: true
    };
  }

  ngAfterViewInit() {
    const vm = this;
    // vm.counter.begin();
  }
  start() {
    const vm = this;
    vm.counter.begin();
  }
  restart() {
    const vm = this;
    window.location.reload();
  }
  onStart() {
    console.log('Started at ' + Date.now());
  }
  onFinished() {
    console.log('Finished at ' + Date.now());
  }
}

