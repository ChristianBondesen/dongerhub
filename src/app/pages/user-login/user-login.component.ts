import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from './user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: UserLoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }
  Login() {
    this.loginService.UserLogin(this.loginForm.value).subscribe(data => {
      if (data.success) {
        sessionStorage.setItem('token', data.token);
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
}
