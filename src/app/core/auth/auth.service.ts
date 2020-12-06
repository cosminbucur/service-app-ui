import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_API = `${environment.serverApiUrl}/api/users`;
  public tokenSubject: BehaviorSubject<any>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.USER_API + '/login', {username, password})
      .pipe(map(res => {
        console.log(res.token);

        this.tokenSubject.next(res.token);
        return res.token;
      }));
  }

  public logout(): void {
    // this.http.post<any>(this.USER_API + '/logout')
  }
}
