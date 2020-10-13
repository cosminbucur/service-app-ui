import { CustomersService } from './../../../../core/services/customers.service';
import { NotificationService } from './../../../../core/services/notification.service';
import { appRoutesNames } from './../../../../app.routes.names';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.mode';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss']
})
export class VisitDetailsComponent implements OnInit {

  public form: FormGroup;
  // public customerControl = new FormControl();
  public options: string[];
  public customers: Customer[];
  public filteredOptions: Observable<string[]>;

  public visit: any = {
    id: null,
    visitDate: new Date(),
    firstName: null,
    lastName: null,
    company: null,
    phone: null,
    email: null,
    licensePlate: null,
    isActive: true
  };

  public onCarData = [
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'summer', brand: 'Continental' },
  ];

  public inStorageData = [
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
    { id: null, size: '215 / 65 R15', season: 'winter', brand: 'Continental' },
  ];

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.initializeData();

    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });

    console.log(this.customers);

    // this.filteredOptions = this.customerControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this.filter(name) : this.options.slice())
    //   );
    // console.log(this.filteredOptions);
  }

  public displayFn(customer: Customer): string {
    return customer && customer.lastName ? customer.firstName : '';
  }

  public async save() {
    if (!this.form.valid) {
      this.notificationService.error('There are errors on the visit fields!');
      return;
    }

    this.notificationService.success('Visit details saved.');
  }

  public cancel() {
    this.goToVisitsPage();
  }

  public print() {
    this.notificationService.info('Printing in progress.');
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public toggleActive() {
    this.notificationService.info('Customer activated');
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const phonePattern = '\\d{10}';

    this.form = new FormGroup({
      visitDate:    new FormControl(this.visit.visitDate, Validators.required),
      firstName:    new FormControl(this.visit.firstName, Validators.required),
      lastName:     new FormControl(this.visit.lastName, Validators.required),
      company:      new FormControl(this.visit.company, Validators.required),
      phone:        new FormControl(this.visit.phone, [Validators.pattern(phonePattern), Validators.required]),
      email:        new FormControl(this.visit.email, [Validators.pattern(emailPattern), Validators.required]),
      licensePlate: new FormControl(this.visit.licensePlate, Validators.required)
    });
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private goToVisitsPage() {
    this.router.navigate([`/${appRoutesNames.VISITS}`]);
  }

  get firstName(): any {
    return this.form.get('firstName');
  }

}
