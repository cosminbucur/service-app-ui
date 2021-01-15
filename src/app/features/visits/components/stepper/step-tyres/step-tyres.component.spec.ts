import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { StepTyresComponent } from "./step-tyres.component";

describe("StepTyresComponent", () => {
  let component: StepTyresComponent;
  let fixture: ComponentFixture<StepTyresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, DragDropModule],
      declarations: [StepTyresComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
