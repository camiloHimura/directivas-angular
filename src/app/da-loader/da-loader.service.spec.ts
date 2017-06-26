import { TestBed, inject } from '@angular/core/testing';

import { DaLoaderService } from './da-loader.service';

describe('DaLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaLoaderService]
    });
  });

  it('should ...', inject([DaLoaderService], (service: DaLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
