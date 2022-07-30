import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {TimeoutService} from "../services/timeout";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements AfterViewInit {
  @Input() value: number = 0;
  @Input() playTime = 1000;
  viewValue = 0;
  constructor(
    private delay: TimeoutService
  ) { }

  ngAfterViewInit() {
    this.play()
  }
  async play(){
    for (let i = 100; i > 100 - this.value; i--){
      this.viewValue = Math.round(3.6 * i);
      await this.delay.timeout(Math.round(this.playTime / this.value));
    }
  }
}
