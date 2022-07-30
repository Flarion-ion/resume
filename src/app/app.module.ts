import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
