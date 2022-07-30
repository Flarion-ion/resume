import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() text: string = "";
  @Input() value = 0;
  @Input() playTime = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
