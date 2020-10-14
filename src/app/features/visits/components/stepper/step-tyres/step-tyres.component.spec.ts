import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTyresComponent } from './step-tyres.component';

describe('StepTyresComponent', () => {
  let component: StepTyresComponent;
  let fixture: ComponentFixture<StepTyresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTyresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
