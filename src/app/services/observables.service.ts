import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ObservablesService {
  private typeSubject = new Subject<any>();
  private typeBehaviorSubject = new BehaviorSubject<number>(1111);
  public observerSubject$ = this.typeSubject.asObservable();
  public observerBehaviorSubject$ = this.typeBehaviorSubject.asObservable();

  constructor(private http: Http) { }
  /**
   * retorna el elemento observable del subject para que el usuario se puede suscribir
   */
  getSubject(): Observable<any> {
    setTimeout(() => { this.typeSubject.next('subject resuelto'); }, 2000);
    return this.observerSubject$;
  }
  /**
   * retorna el elemento observable del BehaviorS ubject para que el usuario se puede suscribir
   */
  getBehaviorSubject(): Observable<any> {
    setTimeout(() => { this.typeBehaviorSubject.next(1991); }, 2000);
    return this.observerBehaviorSubject$;
  }
  /**
   * El valor de un behaviorSubject se puede obtener en cualquier momento
   */
  getBehaviorSubjectValue(): any {
    return this.typeBehaviorSubject.getValue();
  }
  /**
   * Ejemplo basico de como consumir una api externa y obtener la informacion con observables
   */
  getFirst(): Observable<any> {
    return this.http.get('https://reqres.in/api/users/2');
  }
  /**
   * Obtiene la informacion y aplica formato json antes de retornar el observable
   */
  getMap(): Observable<any> {
    return this.http.get('https://reqres.in/api/users/2')
            .map(info => info.json().data);
  }
  /**
   * control de error al utilizar observables
   */
  getError(): Observable<any> {
    return this.http.get('https://reqres.in/api/users/camilo')
            .map(info => info.json().data)
            .catch(this.handleError);
  }
  /**
   * Ejecuta metodos con la ayuda del operador Do
   */
  getWhitDo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users/2')
            .do(info => {/*console.log('before map'); console.log(info)*/})
            .map(info => info.json().data)
            .do(info => {/*console.log('after map'); console.log(info)*/})
            .catch(this.handleError);
  }
  /**
   * Retorna un listado de elemetos
   */
  getList(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1')
            .map(info => info.json().data)
            .catch(this.handleError);
  }

  /**
   * Manejador de errores
   */
  private handleError(error) {
    return Observable.throw('Error en peticion');
  }

}
