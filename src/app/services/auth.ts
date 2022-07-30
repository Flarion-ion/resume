import { Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isWelcome = new Subject<boolean>();
  constructor() {
    this.isAuth = environment.isAuthDefault;
    this.isWelcome.next(false);
  }
}
