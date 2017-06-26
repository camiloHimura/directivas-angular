import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ObservablesService } from './../services/observables.service';

@Injectable()
export class RouteResolveService {

  constructor(private observablesService: ObservablesService) { }

 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response> {
    return this.observablesService.getError();
 }

}
