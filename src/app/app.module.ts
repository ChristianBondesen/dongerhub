import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
