import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChartComponent } from './size-chart.component';

describe('SizeChartComponent', () => {
  let component: SizeChartComponent;
  let fixture: ComponentFixture<SizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
