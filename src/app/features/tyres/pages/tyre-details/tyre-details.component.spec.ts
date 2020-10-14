import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreDetailsComponent } from './tyre-details.component';

describe('TyreDetailsComponent', () => {
  let component: TyreDetailsComponent;
  let fixture: ComponentFixture<TyreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
