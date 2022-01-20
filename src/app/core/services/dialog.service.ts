import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tyre } from 'src/app/shared/models/tyre.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private tyreSource = new BehaviorSubject<Tyre>({} as Tyre);
  currentTyre = this.tyreSource.asObservable();

  constructor() { }

  changeTyre(tyre: Tyre) {
    this.tyreSource.next(tyre)
  }
}
