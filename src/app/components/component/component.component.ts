import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit, OnDestroy {
  infoVoid: string;
  infoString: string;
  number: number = 55;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('componente component eliminado');
  }

  getInfoVoid($info) {
    this.infoVoid = 'Recibido desde hijo';
  }

  getInfoString($info) {
    this.infoString = $info;
  }


}
