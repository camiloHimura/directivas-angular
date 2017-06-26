import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class DaLoaderService {
  control$: Subject<any> = new Subject<any>();

  constructor() { }

  getObservable(): Subject<any> {
    return this.control$;
  }

  show(): void {
    this.control$.next(true);
  }

  close(): void {
    this.control$.next(false);
  }
}
