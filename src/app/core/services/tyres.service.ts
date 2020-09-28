import { TyreBrand } from './../../shared/models/tyre.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TyresService {

  private readonly TYRE_API = `${environment.serverApiUrl}/tyreBrands`;

  constructor(private http: HttpClient) { }

  getBrands(): Observable<TyreBrand[]> {
    return this.http.get<TyreBrand[]>(this.TYRE_API);
  }
}
