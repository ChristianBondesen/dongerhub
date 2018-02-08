import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppRoutingModule } from './router.module';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { MostPopularComponent } from './pages/most-popular/most-popular.component';
import { HowToJoinComponent } from './pages/how-to-join/how-to-join.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetPostService } from './pages/most-popular/getPosts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    UserSearchComponent,
    MostPopularComponent,
    HowToJoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GetPostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
