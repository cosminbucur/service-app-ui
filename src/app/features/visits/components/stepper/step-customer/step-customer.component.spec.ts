import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCustomerComponent } from './step-customer.component';

describe('StepCustomerComponent', () => {
  let component: StepCustomerComponent;
  let fixture: ComponentFixture<StepCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
