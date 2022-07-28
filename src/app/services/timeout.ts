import { Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TimeoutService {
  async timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
