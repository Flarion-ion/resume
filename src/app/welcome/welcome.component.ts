import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
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
  isWelcome = true;
  constructor() { }

  ngAfterViewInit(): void {
    setTimeout( ()=> {
      this.isWelcome = false;
      console.log(this.isWelcome)
    }, 1000)
  }

}
