/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForkJoinService } from './fork-join.service';

describe('Service: ForkJoin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForkJoinService]
    });
  });

  it('should ...', inject([ForkJoinService], (service: ForkJoinService) => {
    expect(service).toBeTruthy();
  }));
});
