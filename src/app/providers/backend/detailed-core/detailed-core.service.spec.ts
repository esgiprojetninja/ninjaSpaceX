import { TestBed, inject } from '@angular/core/testing';

import { DetailedCoreService } from './detailed-core.service';

describe('DetailedCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailedCoreService]
    });
  });

  it('should be created', inject([DetailedCoreService], (service: DetailedCoreService) => {
    expect(service).toBeTruthy();
  }));
});
