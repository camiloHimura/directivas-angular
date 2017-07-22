import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservablesService } from './../services/observables.service';
import { DaLoaderService } from './../da-loader/da-loader.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-observables',
  providers: [ObservablesService],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  getMap: string;
  getJson: string;
  getError: string;
  getWhitDo: string;
  getSubject: string;
  getBehaviorSubject: number;
  valueBehaviorSubject: number;
  private suscribeGetDo: Subscription = null;
  private suscribeGetMap: Subscription = null;
  private suscribeSubject: Subscription = null;
  private suscribeBehaviorSubject: Subscription = null;
  private suscribeGetError: Subscription = null;
  private suscribeGetFirst: Subscription = null;

  constructor(private observablesService: ObservablesService,
              private daLoaderService: DaLoaderService) { }

  ngOnInit() {
    this.daLoaderService.show();

    this.suscribeSubject = this.observablesService.getSubject()
        .subscribe(info => this.getSubject = info);

    /**
     * El behaviorSubjes siempre tiene un valor, al suscribirse a el se optioene el
     * ultimo valor disponible
     */
    this.suscribeBehaviorSubject = this.observablesService.getBehaviorSubject()
        .subscribe(info => this.getBehaviorSubject = info);

    this.valueBehaviorSubject = this.observablesService.getBehaviorSubjectValue();

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

  ngOnDestroy() {
    this.suscribeGetDo.unsubscribe();
    this.suscribeGetMap.unsubscribe();
    this.suscribeSubject.unsubscribe();
    this.suscribeGetFirst.unsubscribe();
    this.suscribeGetError.unsubscribe();
  }

}
