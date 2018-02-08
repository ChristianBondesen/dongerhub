import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login.component';
import { MaterialModule } from '../../material.module';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginService } from './user-login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent }
];
@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000']
      }
    })
  ],
  exports: [],
  providers: [UserLoginService]
})
export class LoginModule {}
