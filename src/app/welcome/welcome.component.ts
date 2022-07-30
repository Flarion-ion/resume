import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {AuthService} from "../services/auth";
import {environment} from "../../environments/environment";
import {LocaleService} from "../services/locale";
import {TimeoutService} from "../services/timeout";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('start', [
      // ...
      state('begin', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('begin => end', [
        animate('1.5s')
      ]),
      transition('end => begin', [
        animate('0.1s')
      ]),
    ]),
  ]
})
export class WelcomeComponent implements AfterViewInit {
  @Output() isCompelite: EventEmitter<boolean> = new EventEmitter();
  isWelcome = false;
  constructor(
    public lang: LocaleService,
    private wait: TimeoutService
  ) {}

  async ngAfterViewInit(){
    if (environment.isWelcomeDefault) {
      await this.wait.timeout(1000);
      this.isWelcome = true;
      await this.wait.timeout(3000);
      this.isWelcome = false;
      await this.wait.timeout(500);
      this.isCompelite.emit(true);
    } else {
      this.isCompelite.emit(true);
    }
  }

}
