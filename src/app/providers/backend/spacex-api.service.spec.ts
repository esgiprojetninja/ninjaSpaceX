import { TestBed, inject } from '@angular/core/testing';

import { SpacexApiService } from './spacex-api.service';

describe('SpacexApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexApiService]
    });
  });

  it('should be created', inject([SpacexApiService], (service: SpacexApiService) => {
    expect(service).toBeTruthy();
  }));
});
