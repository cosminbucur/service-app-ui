import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { Router } from "@angular/router";
import { appRoutesNames } from "src/app/app.routes.names";
import { NotificationService } from "src/app/core/services/notification.service";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  // public user: any = {
  //   // id: null,
  //   username: null,
  //   email: null,
  //   phone: null,
  //   firstName: null,
  //   lastName: null,
  //   // role: null,
  //   // active: false
  // };

  public user: any = {
    username: "test",
    password: "pass",
    email: "test@gmail.com",
    phone: "0722333444",
    firstName: "test",
    lastName: "test",
  };

  public password: string;

  public color: ThemePalette = "accent";
  public checked = false;
  public disabled = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  public ngOnInit(): void {
    this.initializeData();
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.notificationService.error("There are errors on the user fields!");
      return;
    }

    this.authService.register(this.form.value);
    this.notificationService.success("User details saved.");
    // this.goToHome();
  }

  public goToLogin(): void {
    this.router.navigate([`/${appRoutesNames.LOGIN}`]);
  }

  private async initializeData() {
    this.createReactiveForm();
  }

  private createReactiveForm() {
    const emailPattern =
      "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";
    const phonePattern = "\\d{10}";

    this.form = this.fb.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required],
      email: [
        this.user.email,
        [Validators.pattern(emailPattern), Validators.required],
      ],
      phone: [this.user.phone, [Validators.pattern(phonePattern)]],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
    });
  }

  private goToHome() {
    this.router.navigate([`/${appRoutesNames.HOME}`]);
  }
}
