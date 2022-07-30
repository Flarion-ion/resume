import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth";
import {LocaleService} from "./services/locale";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'resume';
  isInit = false;
  constructor(
    public auth: AuthService,
     public locale: LocaleService
  ) {}

  ngOnInit() {
    this.init()
  }
  async init(){
    this.locale.init()
  }
  loadApp(event: boolean){
    this.isInit = event
  }
}
