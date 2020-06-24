import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly notification$: Observable<string> = this.notification.asObservable();

  constructor(private toastr: ToastrService) { }

  notify(message) {
    this.notification.next(message);
  }

  success(message, title?): Promise<any> {
    return new Promise(resolve => resolve(this.toastr.success(message, title)));
  }

  info(message, title?): Promise<any> {
    return new Promise(resolve => resolve(this.toastr.info(message, title)));
  }

  error(message, title?): Promise<any> {
    return new Promise(resolve => resolve(this.toastr.error(message, title)));
  }
}
