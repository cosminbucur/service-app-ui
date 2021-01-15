import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StepCustomerComponent } from "./step-customer.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

xdescribe("StepCustomerComponent", () => {
  let component: StepCustomerComponent;
  let fixture: ComponentFixture<StepCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, MatDialogModule],
      declarations: [StepCustomerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
