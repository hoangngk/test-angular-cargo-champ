import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OffersService {
  hideColumnSub = new BehaviorSubject(null);
}
