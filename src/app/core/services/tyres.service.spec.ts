import { TestBed } from '@angular/core/testing';

import { TyresService } from './tyres.service';

describe('TyresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyresService = TestBed.get(TyresService);
    expect(service).toBeTruthy();
  });
});
