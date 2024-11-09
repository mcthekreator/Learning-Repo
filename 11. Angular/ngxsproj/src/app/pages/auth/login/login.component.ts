import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup;
  private fb = inject(FormBuilder)

  constructor() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  public login(): void {
    let loginData = this.loginForm.value;
    console.log(loginData);

  }

}
