import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-animation',
  providers: [ObservablesService],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('opacityIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('.3s ease-in')
      ])
    ]),
    trigger('heightIn', [
      state('in', style({height: '*'})),
      transition('void => *', [
        style({height: 0}),
        animate(250)
      ])
    ])
  ]
})

export class AnimationComponent implements OnInit {
  list: Array<{first_name: String, last_name: String}> = [];

  constructor(private observablesService: ObservablesService) { }

  ngOnInit() {
    this.observablesService.getList()
      .subscribe((info) => { this.list = info; console.log(info); });
  }

  add(): void{
    this.list.push({first_name: 'camilo', last_name: 'colorado'});
  }
  animationStarted(e) {
    console.log(e);
  }

  animationDone(e) {
    console.log(e);
  }

}
