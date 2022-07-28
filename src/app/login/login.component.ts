import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth";
import {LocaleService} from "../services/locale";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {timeout} from "rxjs/operators";
import {TimeoutService} from "../services/timeout";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailLabel = ""
  passLabel = ""
  constructor(
    public auth: AuthService,
    public lang: LocaleService,
    private wait: TimeoutService,
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.isAuth = true;
  }
  changeLang(): void {
    this.lang.changeLang()
  }
  async autoEnter(){
    const email = "bestcompany@gmail.com".split('')
    const pass = "oisgjOIjgw34!".split('')

    for (const char of email){
      await this.wait.timeout(20);
      this.emailLabel += char
    }
    await this.wait.timeout(200);

    for (const char of pass){
      await this.wait.timeout(10);
      this.passLabel += char
    }

    await this.wait.timeout(500);
    this.login()
  }
}
