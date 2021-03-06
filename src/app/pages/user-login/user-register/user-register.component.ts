import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../user-login.service';
import { User } from '../../../models/auth-models/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newUser: FormGroup;
  constructor(private fb: FormBuilder, private service: UserLoginService, private route: Router) { }

  ngOnInit() {
    this.newUser = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]]
      },
      {
        validator: this.formGroupValidationFunction(
          'password',
          'repeatPassword'
        )
      }
    );
  }
  formGroupValidationFunction(a: string, b: string) {
    return (formGroup: FormGroup): void => {
      const field1 = formGroup.controls[a];
      const field2 = formGroup.controls[b];

      if (field1.value !== field2.value) {
        field2.setErrors({ formGroupValidationFunction: true });
      }
    };
  }
  Register(): void {
    this.service.UserRegister(this.newUser.value).subscribe((data) => {
      sessionStorage.setItem('jwt', JSON.stringify(data['token']));
      this.route.navigate(['/home']);
    });
  }
}
