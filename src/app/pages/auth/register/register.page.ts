import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUserRegisterData } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuthPresenter } from '../presenters/login.presenter';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage implements OnInit {
  registerForm = this.authPresenter.registerFormData;

  constructor(
    private authPresenter: AuthPresenter,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const { username, email, password, password2 } = this.registerForm.value;

    if (!username || !email || !password) return;
    if (password !== password2) return;

    const registerData: IUserRegisterData = {
      username,
      email,
      password,
    };

    this.authService
      .signUpUser(registerData)
      .pipe(tap(() => this.router.navigate(['/'])))
      .subscribe();
  }
}
