import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  data: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  today: number = Date.now();
  title: String = 'cristian camilo';
  collection: string[] = ['a', 'b', 'c', 'd'];
  constructor() { }

  ngOnInit() {
  }

  time = new Observable<string> ((observer: any) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
