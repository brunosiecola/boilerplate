import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBehaviorSubject: BehaviorSubject<undefined | any> = new BehaviorSubject(undefined);

  public get user(): undefined | any {
    return this.userBehaviorSubject.getValue();
  }

  public get user$(): Observable<undefined | any> {
    return this.userBehaviorSubject.asObservable();
  }

  public set user(user: undefined | any) {
    this.userBehaviorSubject.next(user);
  }

}
