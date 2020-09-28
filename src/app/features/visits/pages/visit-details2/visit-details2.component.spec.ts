import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetails2Component } from './visit-details2.component';

describe('CreateVisitComponent', () => {
  let component: VisitDetails2Component;
  let fixture: ComponentFixture<VisitDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
