import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicSearchComponent } from './mechanic-search.component';

describe('MechanicSearchComponent', () => {
  let component: MechanicSearchComponent;
  let fixture: ComponentFixture<MechanicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
