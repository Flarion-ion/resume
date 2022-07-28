import { Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {observable, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  lang = environment.defaultLang;
  phrases: any | undefined = undefined;
  constructor(
    private http: HttpClient
  ) {}

  init(): void{
    const userLang = window.localStorage.getItem("lang")
    console.log(userLang)
    if (userLang != null){
      this.lang = userLang
    } else {
      window.localStorage.setItem("lang", this.lang)
    }
    this.http.get("assets/" + this.lang + ".json", {responseType: 'json'})
      .subscribe(file=>{
        this.phrases = file
      })
  }
  get (phrase: string) {
    return this.phrases === undefined ? "" : this.phrases[phrase]
  }

  changeLang():void {
    this.lang == "ru" ? window.localStorage.setItem("lang", "eng") : window.localStorage.setItem("lang", "ru")
    window.location.reload()
  }
  nextLang(): string {
    return this.lang == "ru" ? "eng" : "ru"
  }
}
