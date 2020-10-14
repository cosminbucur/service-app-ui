import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreCardComponent } from './tyre-card.component';

describe('TyreCardComponent', () => {
  let component: TyreCardComponent;
  let fixture: ComponentFixture<TyreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
