import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
