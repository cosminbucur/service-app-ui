import { User } from '../../shared/models/user.model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers: HttpHeaders;

  private readonly USER_API = `${environment.serverApiUrl}/users`;

  constructor(private http: HttpClient) {}

  /**
   * Get all available users
   */
  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.USER_API)
      .pipe(catchError(this.handleError));
  }

  /**
   * Get one user by id
   */
  get(id: number) {
    return this.http
      .get<User>(`${this.USER_API}/${id}`)
      .pipe(
        map(userDto => {
          return this.toEntity(userDto);
        })
      )
      .toPromise();
  }

  /**
   * Create a new user
   */
  create(user: User): Promise<User> {
    const userDto = this.toRequestDto(user);
    return this.http.post<User>(this.USER_API, userDto).toPromise();
  }

  /**
   * Update user details
   * @param id user id
   * @param user updated user object
   */
  update(id: number, user: User): Promise<User> {
    const userDto = this.toRequestDto(user);
    return this.http.post<User>(`${this.USER_API}/${id}`, userDto).toPromise();
  }

  /**
   * Delete one user with the given id
   */
  delete(id: number): Promise<User | null> {
    return this.http.delete<User>(`${this.USER_API}/${id}`).toPromise();
  }

  private toEntity(dto: any): User {
    return {
      id: dto.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      registerDate: dto.registerDate,
      role: dto.role,
      isActive: dto.isActive
    };
  }

  private toRequestDto(user: User): object {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      registerDate: user.registerDate,
      role: user.role,
      isActive: user.isActive
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was:`,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
