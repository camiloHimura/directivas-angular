import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ObservablesService } from './../../services/observables.service';
import { DaLoaderService } from './../../da-loader/da-loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit {

@ViewChild('nameView') nameView;

onInput$: Observable<any>;
onArray$: Observable<any>;
onObject$: Observable<any>;
onPromise$: Observable<any>;
arrayData = [123, 12, 313, 435, 345, 35];
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
        this.onInput$ = Observable.fromEvent(this.nameView.nativeElement, 'keyup');
        this.onInput$.subscribe( info => console.log(info));

        this.onArray$ = Observable.from(this.arrayData);
        this.onArray$.subscribe( info => console.log(info),
                                error => console.log(error),
                                   () => console.log(`complete array`));

        this.onObject$ = Observable.from(this.ObjectData);
        this.onObject$.subscribe( info => console.log(info),
        error => console.log(error),
        () => console.log(`complete object`));
        this.promise();
    }

    promise() {
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
