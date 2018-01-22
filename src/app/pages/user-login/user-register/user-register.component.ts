import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newUser: FormGroup;
  constructor(private fb: FormBuilder, private service: UserLoginService) {}

  ngOnInit() {
    this.newUser = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      repeatPassword: [''],
      email: ['']
    });
  }
  Register(): void {
    this.service.UserRegister(this.newUser.value).subscribe(data => {
      console.log(data);
    });
  }
}
