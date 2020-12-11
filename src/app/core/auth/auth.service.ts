import { first, map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "src/app/shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private USER_API = `${environment.serverApiUrl}/api/users`;
  public tokenSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.tokenSubject.asObservable();
  }

  public get currentTokenValue(): any {
    console.log("token subject value", this.tokenSubject.value);

    return this.tokenSubject.value;
  }

  public register(signupData: any) {
    console.log("sigupData", signupData);

    return this.http
      .post<any>(this.USER_API + "/signup", signupData)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log("success");

          // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          // this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: (error) => {
          // this.alertService.error(error);
          // this.loading = false;
        },
      });
  }

  public login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.USER_API + "/login", { username, password })
      .pipe(
        map((res) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(res));
          console.log("token", res.token);
          console.log("res", res);

          this.tokenSubject.next(res.token);
          return res.token;
        })
      );
  }

  public logout(): void {
    // this.http.post<any>(this.USER_API + '/logout')
  }
}
