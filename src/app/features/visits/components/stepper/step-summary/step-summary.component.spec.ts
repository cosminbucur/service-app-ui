import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSummaryComponent } from './step-summary.component';

describe('StepSummaryComponent', () => {
  let component: StepSummaryComponent;
  let fixture: ComponentFixture<StepSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
