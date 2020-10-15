import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreDialogComponent } from './tyre-dialog.component';

describe('TyreDialogComponent', () => {
  let component: TyreDialogComponent;
  let fixture: ComponentFixture<TyreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
