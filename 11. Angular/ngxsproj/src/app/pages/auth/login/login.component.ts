import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAnimal } from '../../../store/animal.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private store = inject(Store)

  constructor() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

   ngOnInit(): void {
    this.login()
  }

  public login(): void {
    let loginData = this.loginForm.value;
    console.log(loginData);
    this.router.navigate(['/home'])

  }

}
