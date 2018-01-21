import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newUser: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newUser = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      repeatPassword: [''],
      email: [''],
    });
  }
  Register(): void {
    console.log(this.newUser.value);
  }

}
