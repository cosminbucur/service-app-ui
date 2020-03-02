import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomerVisit } from 'src/app/shared/models/visit.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class VisitsService {
    headers: HttpHeaders;

    private readonly VISIT_API = `${environment.serverApiUrl}/visits`;

    constructor(private http: HttpClient) {}

    getByLicensePlate(licensePlates: string) {
        return this.http
      .get<CustomerVisit>(`${this.VISIT_API}/${licensePlates}`)
      .pipe(
        map(customerVisitDto => {
          return this.toEntity(customerVisitDto);
        })
      )
      .toPromise();
  }

    toEntity(dto: any): CustomerVisit {
        return{
            customerId: dto.customerId,
            visitDate: dto.visitDate,
            licensePlates: dto.licensePlates,
            seasonPassed: dto.seasonPassed
        };
    }

}


