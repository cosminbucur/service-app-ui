import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from 'src/app/shared/models/customer.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private readonly CUSTOMER_API = `${environment.serverApiUrl}/customers`;

  constructor(private http: HttpClient) { }

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

  getById(id: number): Observable<Customer> {
    return this.http
      .get<Customer>(this.CUSTOMER_API + `${id}`)
      .pipe(catchError(this.handleError));
  }

  // getByLastName(lastName: string): Observable<Customer[]> {
  //   // return this.http
  //   //   .get<Customer>(this.CUSTOMER_API + `${lastName}`)
  //   //   .pipe(catchError(this.handleError));
  //   return of([{
  //     firstName: 'daenerys',
  //     lastName: 'vasilescu',
  //     email: 'danny@gmail.com',
  //     phoneNumber: '0722333444',
  //     company: 'westeros',
  //     licensePlate: "B11AAA",
  //     id: 1
  //   },
  //   {
  //     firstName: 'daenerys',
  //     lastName: 'vasile',
  //     email: 'danny@gmail.com',
  //     phoneNumber: '0722333444',
  //     company: 'westeros',
  //     licensePlate: "B11BBB",
  //     id: 2
  //   }]);
  // }

  private toRequestDto(customer: Customer): object {
    return {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phoneNumber,
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
