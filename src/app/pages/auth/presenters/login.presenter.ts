import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AuthPresenter {
  loginFormData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerFormData = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });
}
