import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-contend',
  templateUrl: './ng-contend.component.html',
  styleUrls: ['./ng-contend.component.css']
})
export class NgContendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertInfo() {
    alert('info desde component ngConted');
  }
}
