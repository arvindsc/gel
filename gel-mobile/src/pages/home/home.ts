import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  loading$: Observable<boolean>;
  constructor(private store: Store<any>, public navCtrl: NavController) {
    this.loading$ = this.store.select(s => s.auth.loading);
  }
}
