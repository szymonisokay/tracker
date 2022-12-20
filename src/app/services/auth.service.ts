import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthApiService } from '../api/auth.api.service';
import { IUser, IUserLoginData, IUserRegisterData } from '../models/user.model';
import {
  removeUserFromLocalStorage,
  retrieveUserFromLocalStorage,
  saveUserToLocalStorage,
} from '../utils/local-storage-helpers';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private authApi: AuthApiService, private router: Router) {}

  getUser$(): Observable<IUser | null> {
    return this.user$;
  }

  getUserFromLocalStorage(): void {
    const user = retrieveUserFromLocalStorage();

    this.user$.next(user);
  }

  signInUser(user: IUserLoginData): Observable<IUser> {
    return this.authApi.login(user).pipe(
      tap((user: IUser) => this.user$.next(user)),
      tap((user: IUser) => saveUserToLocalStorage(user))
    );
  }

  signUpUser(user: IUserRegisterData): Observable<IUser> {
    return this.authApi.register(user).pipe(
      tap((user: IUser) => this.user$.next(user)),
      tap((user: IUser) => saveUserToLocalStorage(user))
    );
  }

  logoutUser() {
    this.router.navigate(['/login']).then(() => {
      this.user$.next(null);
      removeUserFromLocalStorage();
    });
  }

  getUserToken(): string {
    const user = retrieveUserFromLocalStorage();

    if (!user) return '';

    return user.token;
  }
}
