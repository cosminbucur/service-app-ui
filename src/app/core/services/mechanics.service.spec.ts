import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { MechanicsService } from "./mechanics.service";

describe("MechanicsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: MechanicsService = TestBed.get(MechanicsService);
    expect(service).toBeTruthy();
  });
});
