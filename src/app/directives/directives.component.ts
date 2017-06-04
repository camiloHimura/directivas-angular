import { Component, OnInit } from '@angular/core';
import { ComponenOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  keyClass: boolean;
  showContend: boolean;
  showComponent: boolean;
  optionTap: number;
  objStyle: string = "font-style: 20px";
  showCase: string;
  showList: Array<number> = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
    this.keyClass = true;
    this.showContend = true;
    this.showCase = "1"; 
  }

  changeShow(){
    this.showContend = this.showContend ? false : true;
  }

  changeShowComponent(){
    this.showComponent = this.showComponent ? false : true;
  }

  changeOptionTaps(num: number){
    this.optionTap = num;
  }

}
