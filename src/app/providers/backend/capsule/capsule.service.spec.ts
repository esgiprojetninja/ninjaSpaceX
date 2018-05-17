import { TestBed, inject } from '@angular/core/testing';

import { CapsuleService } from './capsule.service';

describe('CapsuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapsuleService]
    });
  });

  it('should be created', inject([CapsuleService], (service: CapsuleService) => {
    expect(service).toBeTruthy();
  }));
});
