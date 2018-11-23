import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  config;
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  constructor() {
    const vm = this;
    vm.config = {
      leftTime: 60 * 4
    };
  }

  ngOnInit() {
    const vm = this;
    vm.counter.begin();
  }
  onStart() {
    console.log('Started at ' + Date.now());
  }
  onFinished() {
    console.log('Finished at ' + Date.now());
  }
  restart() {
    const vm = this;
    vm.counter.restart();
  }
}

