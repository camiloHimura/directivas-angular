import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservablesService } from './../../services/observables.service';
import { DaLoaderService } from './../../da-loader/da-loader.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
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

    this.suscribeSubject = this.observablesService.getSubject()
        .subscribe(info => this.getSubject = info);

    /**
     * El behaviorSubjes siempre tiene un valor, al suscribirse a el se optiene el
     * ultimo valor disponible
     */
    this.suscribeBehaviorSubject = this.observablesService.getBehaviorSubject()
        .subscribe(info => this.getBehaviorSubject = info);

    this.valueBehaviorSubject = this.observablesService.getBehaviorSubjectValue();

    this.suscribeGetFirst = this.observablesService.getFirst()
        .subscribe(info => this.getJson = info.json());

  }

}
