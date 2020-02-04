import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVisitComponent } from './customer-visit.component';

describe('CustomerVisitComponent', () => {
  let component: CustomerVisitComponent;
  let fixture: ComponentFixture<CustomerVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
