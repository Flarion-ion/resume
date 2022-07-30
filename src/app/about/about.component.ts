import { Component, OnInit } from '@angular/core';
import {LocaleService} from "../services/locale";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public lang: LocaleService
  ) { }

  ngOnInit(): void {
  }

}
