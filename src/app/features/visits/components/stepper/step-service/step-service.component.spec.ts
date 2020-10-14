import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepServiceComponent } from './step-service.component';

describe('StepServiceComponent', () => {
  let component: StepServiceComponent;
  let fixture: ComponentFixture<StepServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
