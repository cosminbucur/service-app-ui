import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/shared/models/customer.mode';
import { environment } from 'src/environments/environment';

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
}
