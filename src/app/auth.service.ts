import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public setLogin(status: boolean) {
    this.isLoggedIn$.next(status);
  }

  public getLogin() {
    return this.isLoggedIn$.asObservable();
  }
}
