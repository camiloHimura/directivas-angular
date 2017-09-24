import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ObservablesService } from './../../services/observables.service';
import { DaLoaderService } from './../../da-loader/da-loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/fromPromise';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit {

@ViewChild('nameView') nameView;
valNameView = '';

onInput$: Observable<any>;

onArray$: Observable<any>;
valArray: string;

onObject$: Observable<any>;
onPromise$: Observable<any>;
arrayData = [1, 1, 1, 1, 1, 1];
ObjectData = [{name: 'camilo', lastName: 'colmenares'},
                {name: 'camilo2', lastName: 'colmenares2'},
                {name: 'camilo3', lastName: 'colmenares3'},
                {name: 'camilo4', lastName: 'colmenares4'},
                {name: 'camilo5', lastName: 'colmenares5'},
                {name: 'camilo6', lastName: 'colmenares6'}];

getMap: string;
getJson: string;
getError: string;
getWhitDo: string;

private suscribeGetFirst: Subscription = null;
private suscribeGetMap: Subscription = null;
private suscribeGetError: Subscription = null;
private suscribeGetDo: Subscription = null;

    constructor(private observablesService: ObservablesService,
              private daLoaderService: DaLoaderService) { }

    ngOnInit() {
        this.daLoaderService.show();
        this.suscribeGetFirst = this.observablesService.getFirst()
            .subscribe(info => this.getJson = info.json());

        this.suscribeGetMap = this.observablesService.getMap()
            .subscribe(info => { this.getMap = info; this.daLoaderService.close(); });

        this.suscribeGetError = this.observablesService.getError()
            .subscribe(
                info => { /*this.getError = info;*/ },
                error => { this.getError = error; }
                );

        this.suscribeGetDo = this.observablesService.getWhitDo()
            .subscribe(info => { this.getWhitDo = info; });
    }

    ngAfterViewInit() {
      //this.byEvent();
      this.byArray();
      //this.byPromise();
/*       
      this.onObject$ = Observable.from(this.ObjectData);
      this.onObject$.subscribe( info => console.log(info),
      error => console.log(error),
      () => console.log(`complete object`));
      this.promise(); */
    }

    byEvent() {
      Observable.fromEvent(this.nameView.nativeElement, 'keyup')
      //.take(4)
      .pluck('target', 'value')
      .do(info => console.log(info))
      .debounceTime(1000)
      .map(data => Number(data))
      .do(info => console.log(info))
      //.do(info => console.log(info))
      .subscribe( (info: any) => this.valNameView = info);
    }

    byArray() {
      Observable.from(this.arrayData)
      .do(info => console.log(info))
      .scan((acc, curr) => acc + curr)
      .takeLast(1)
      .delay(0)
      .subscribe( (info: any) => this.valArray = info,
                  error => console.log(error),
                  () => console.log(`complete array`));
    }

    byPromise() {
        const promise = new Promise((resolve, reject) => {
            setTimeout( () => { resolve('Desde Promesa'); }, 2000);
        });
        promise.then(info => console.log(info));

        this.onPromise$ = Observable.fromPromise(promise);
        this.onPromise$.subscribe( info => console.log(`desde observador ${info}`),
                                  error => console.log(error),
                                     () => console.log(`complete observerPromise`));
    }
}
