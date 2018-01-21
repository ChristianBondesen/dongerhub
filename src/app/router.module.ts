import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HowToJoinComponent } from './pages/how-to-join/how-to-join.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { MostPopularComponent } from './pages/most-popular/most-popular.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'login',
    loadChildren: 'app/pages/user-login/login.module#LoginModule'
  },
  { path: 'how-to-join', component: HowToJoinComponent },
  { path: 'most-popular', component: MostPopularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
