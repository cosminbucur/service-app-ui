import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";
import { TyreDetailsComponent } from "./tyre-details.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

xdescribe("TyreDetailsComponent", () => {
  let component: TyreDetailsComponent;
  let fixture: ComponentFixture<TyreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        MatAutocompleteModule
      ],

      declarations: [TyreDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
