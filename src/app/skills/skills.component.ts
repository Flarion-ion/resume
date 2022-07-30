import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Output () event!: EventEmitter<number>;
  constructor() { }

  ngOnInit(): void {
  }
}
