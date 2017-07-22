import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    /* Fuerza al componente a escuchar cambios 
    this.cdRef.markForCheck();*/
  }

  get contenidoHtml(){
    console.log('contenidoHtml');
    return '<h1>contenido desde get</h1>';
  }
}
