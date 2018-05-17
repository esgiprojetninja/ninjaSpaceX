import { TestBed, inject } from '@angular/core/testing';

import { LaunchpadService } from './launchpad.service';

describe('LaunchpadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchpadService]
    });
  });

  it('should be created', inject([LaunchpadService], (service: LaunchpadService) => {
    expect(service).toBeTruthy();
  }));
});
