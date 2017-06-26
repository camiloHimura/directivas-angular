import { TestBed, inject } from '@angular/core/testing';

import { RouteResolveService } from './route-resolve.service';

describe('RouteResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteResolveService]
    });
  });

  it('should ...', inject([RouteResolveService], (service: RouteResolveService) => {
    expect(service).toBeTruthy();
  }));
});
