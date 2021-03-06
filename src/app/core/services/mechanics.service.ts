import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { environment } from 'src/environments/environment';
import { Mechanic } from '../../shared/models/mechanic.model';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  private readonly MECHANIC_API = `${environment.serverApiUrl}/mechanics`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mechanic[]> {
    return this.http.get<Mechanic[]>(this.MECHANIC_API);
  }
}
