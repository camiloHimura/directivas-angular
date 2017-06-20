import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ObservablesService {

  constructor(private http: Http) { }
  /**
   * Ejemplo basico de como consumir una api externa y obtener la informacion con observables
   */
  getFirst(): Observable<any> {
    return this.http.get('https://reqres.in/api/users/2');
  }
  /**
   * Obtiene la informacion y aplica formato json antes de retornar el observable
   */
  getMap(): any {
    return this.http.get('https://reqres.in/api/users/2')
            .map(info => info.json().data);
  }
  /**
   * control de error al utilizar observables
   */
  getError(): any {
    return this.http.get('https://reqres.in/api/users/camilo')
            .map(info => info.json().data)
            .catch(this.handleError);
  }
  /**
   * Ejecuta metodos con la ayuda del operador Do
   */
  getWhitDo(): any {
    return this.http.get('https://reqres.in/api/users/2')
            .do(info => {console.log('before map'); console.log(info)})
            .map(info => info.json().data)
            .do(info => {console.log('after map'); console.log(info)})
            .catch(this.handleError);
  }

  /**
   * Manejador de errores
   */
  private handleError(error){
    return Observable.throw('Error en peticion');
  }

}
