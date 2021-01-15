import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TyreDialogComponent } from "./tyre-dialog.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

xdescribe("TyreDialogComponent", () => {
  let component: TyreDialogComponent;
  let fixture: ComponentFixture<TyreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatDialogModule],
      declarations: [TyreDialogComponent, MatDialogRef]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
