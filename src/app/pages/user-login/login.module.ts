import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { MaterialModule } from '../../material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: UserLoginComponent }];
@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class LoginModule {}
