import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TyresService } from './tyres.service';

describe('TyresService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: TyresService = TestBed.get(TyresService);
    expect(service).toBeTruthy();
  });
});
