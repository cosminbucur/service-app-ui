import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { VisitsService } from './visits.service';
import { CustomersService } from 'src/app/core/services/customers.service';

describe('VisitsService', () => {
  let service: VisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        VisitsService,
        CustomersService
      ],
    });
    service = TestBed.inject(VisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
