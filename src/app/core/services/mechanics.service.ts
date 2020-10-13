import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.mode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  private readonly MECHANIC_API = `${environment.serverApiUrl}/mechanics`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.MECHANIC_API);
  }
}
