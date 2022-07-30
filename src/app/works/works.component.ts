import { Component, OnInit } from '@angular/core';
import {LocaleService} from "../services/locale";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor(
    public lang: LocaleService
  ) { }

  ngOnInit(): void {
  }

}
