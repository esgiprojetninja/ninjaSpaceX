import { TestBed, inject } from '@angular/core/testing';

import { DetailedcapsuleService } from './detailedcapsule.service';

describe('DetailedcapsuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailedcapsuleService]
    });
  });

  it('should be created', inject([DetailedcapsuleService], (service: DetailedcapsuleService) => {
    expect(service).toBeTruthy();
  }));
});
