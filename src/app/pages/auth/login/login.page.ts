import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { IUserLoginData } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuthPresenter } from '../presenters/login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  loginForm = this.authPresenter.loginFormData;

  constructor(
    private router: Router,
    private authPresenter: AuthPresenter,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLoginSubmit() {
    const { email, password } = this.loginForm.value;

    if (!email || !password) return;

    const loginData: IUserLoginData = {
      email,
      password,
    };

    this.authService
      .signInUser(loginData)
      .pipe(tap(() => this.router.navigate(['/'])))
      .subscribe();
  }
}
