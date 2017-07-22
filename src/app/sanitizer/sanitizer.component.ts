import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.css']
})
export class SanitizerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  get contenidoHtml(){
    console.log('get contenidoHtml');
    return '<h1>Hola desde contenido dinamico</h1>';
  }
}
