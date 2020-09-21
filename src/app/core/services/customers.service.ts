import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from 'src/app/shared/models/customer.mode';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private readonly CUSTOMER_API = `${environment.serverApiUrl}/customers`;

  constructor(private http: HttpClient) {}

  /**
   * Create a new customer
   */
  create(customer: Customer): Promise<Customer> {
    const dto = this.toRequestDto(customer);
    return this.http.post<Customer>(this.CUSTOMER_API, dto).toPromise();
  }

  getAll(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.CUSTOMER_API)
      .pipe(catchError(this.handleError));
  }

  private toRequestDto(customer: Customer): object {
    return {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      company: customer.company
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was:`,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
