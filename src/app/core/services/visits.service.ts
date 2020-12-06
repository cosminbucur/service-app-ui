import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerVisit } from 'src/app/shared/models/visit.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  private readonly VISITS_API = `${environment.serverApiUrl}/api/visits`;

  constructor(private http: HttpClient) { }

  create(customerVsit: CustomerVisit): Observable<CustomerVisit> {
    return this.http.post<CustomerVisit>(this.VISITS_API, customerVsit);
  }

  getAll(): Observable<CustomerVisit[]> {
    return this.http
    .get<CustomerVisit[]>(this.VISITS_API)
    .pipe(map(dtos => {
      console.log('dtos', dtos);
      return this.toEntities(dtos);
    }));
  }

  getById(id: number): Observable<CustomerVisit> {
    return this.http.get<CustomerVisit>(this.VISITS_API + `${id}`)
    .pipe(map(dto => {
      return this.toEntity(dto);
    }));
  }

  // mapper

  private toEntities(dtos: any): CustomerVisit[] {
    let result = [];
    dtos.array.forEach(dto => {
      result.push(this.toEntity(dto))
    });
    console.log('result=',result);
    return result;
  }

  private toEntity(dto: any): CustomerVisit {
    return {
      id: dto.id,
      visitDate: dto.visitDate,
      mechanicId: dto.mechanicId,
      servicesPerformed: dto.servicesPerformed,
      observations: dto.observations,
      customer: {
        id: dto.customerRead.id,
        firstName: dto.customerRead.firstName,
        lastName: dto.customerRead.lastName,
        company: dto.customerRead.company,
        phoneNumber: dto.customerRead.phoneNumber,
        email: dto.customerRead.email
      },
      storagePoint: dto.storagePointRead
    }
  }

}
