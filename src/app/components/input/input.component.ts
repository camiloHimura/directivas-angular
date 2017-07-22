
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() progress: number = 0;
  @Output() infoVacio: EventEmitter<any> = new EventEmitter<void>();
  @Output() infoData: EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.waitEmitter();
    console.log('progress: ', this.progress);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  waitEmitter() {
    setTimeout(() => { this.infoVacio.emit(); }, 1000);
    setTimeout(() => { this.infoData.emit('hola Padre'); }, 2000);
  }

  alert(){
    alert('alert componet input');
  }
}
