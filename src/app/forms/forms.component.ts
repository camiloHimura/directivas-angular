import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  powers: string[]= ['Hola', 'desde', 'componente']
  ngOnInit() {
  }

  onSubmit(form: NgForm, nombre: any, apellido: any): void {
    console.log(form);
  }
}
