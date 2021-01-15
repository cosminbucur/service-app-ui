import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MechanicSearchComponent } from "./mechanic-search.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

describe("MechanicSearchComponent", () => {
  let component: MechanicSearchComponent;
  let fixture: ComponentFixture<MechanicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, MatAutocompleteModule],
      declarations: [MechanicSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
