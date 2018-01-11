import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppRoutingModule } from './router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [BrowserModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
