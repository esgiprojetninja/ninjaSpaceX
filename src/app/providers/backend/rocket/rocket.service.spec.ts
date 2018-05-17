import { TestBed, inject } from "@angular/core/testing";

import { RocketService } from "./rocket.service";

describe("RocketService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RocketService]
    });
  });

  it("should be created", inject([RocketService], (service: RocketService) => {
    expect(service).toBeTruthy();
  }));
});
