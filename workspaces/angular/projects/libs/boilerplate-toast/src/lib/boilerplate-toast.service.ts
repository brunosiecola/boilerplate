import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BoilerplateToast, BoilerplateToastType } from './boilerplate-toast.interface';

@Injectable({
  providedIn: 'root'
})
export class BoilerplateToastService {

  private readonly _send: Subject<BoilerplateToast> = new Subject();

  public get send$(): Observable<BoilerplateToast> {
    return this._send.asObservable();
  }

  private set send(toast: BoilerplateToast) {
    this._send.next(toast);
  }

  public success(message: string): void {
    this.send = { type: BoilerplateToastType.Success, message };
  }

  public error(message: string): void {
    this.send = { type: BoilerplateToastType.Error, message };
  }

}
