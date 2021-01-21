import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { VisitService } from './visits.service';
import { CustomersService } from 'src/app/core/services/customers.service';

describe('VisitService', () => {
  let service: VisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        VisitService,
        CustomersService
      ],
    });
    service = TestBed.inject(VisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
