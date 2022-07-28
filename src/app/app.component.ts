import { Component } from '@angular/core';
import {AuthService} from "./services/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

  constructor(
    public auth: AuthService
  ) {}
}
