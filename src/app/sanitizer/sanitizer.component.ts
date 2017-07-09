import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.css']
})
export class SanitizerComponent implements OnInit {

  contenidoHtml: string;
  constructor() { }

  ngOnInit() {
    this.contenidoHtml = '<h1>Hola desde contenido dinamico</h1>';
  }

}
