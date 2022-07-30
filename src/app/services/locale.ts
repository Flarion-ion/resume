import { Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {observable, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TimeoutService} from "./timeout";


@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  lang = environment.defaultLang;
  phrases: any | undefined = undefined;
  isInit: boolean = false;
  waitResolve: boolean = false;
  constructor(
    private http: HttpClient,
    private delay: TimeoutService
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
        this.phrases = file;
        this.isInit = true;
        this.waitResolve = true;
      })
  }

  async waitInit(){
    if (!this.waitResolve){
      await this.delay.timeout(50);
      return
    }
    return true;
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
