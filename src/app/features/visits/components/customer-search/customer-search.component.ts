import { CustomersService } from '../../../../core/services/customers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.mode';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  public customers: Customer[] = [];
  public filteredCustomers: Observable<Customer[]>;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      filter: null
    });

    this.customersService.getAll().subscribe(data => {
      this.customers = data;
    });

    this.filteredCustomers = this.customerFilter.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.lastName),
        map(lastName => lastName ? this.filter(lastName) : this.customers.slice())
      );
  }

  private filter(name: string): Customer[] {
    const filterValue = name.toLowerCase();
    return this.customers.filter(customer => customer.lastName.toLowerCase().indexOf(filterValue) === 0);
  }

  public displayFn(customer: Customer): string {
    return customer && customer.lastName && customer.firstName ? customer.lastName + ' ' + customer.firstName : '';
  }

  get customerFilter() {
    return this.form.get('filter') as FormArray;
  }
}
