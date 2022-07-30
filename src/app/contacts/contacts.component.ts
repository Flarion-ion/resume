import { Component, OnInit } from '@angular/core';
import {LocaleService} from "../services/locale";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    public lang: LocaleService
  ) { }

  ngOnInit(): void {
  }

}
