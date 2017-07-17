import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  counter: number;

  constructor() {
    this.counter = 1;
  }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
