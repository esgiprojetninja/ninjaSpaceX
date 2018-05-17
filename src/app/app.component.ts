import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { SpacexApiService } from "./providers/backend/spacex-api.service";
import { ApiError } from "./typings/ServiceError";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private subscriber: Subscription;

  constructor(public snackBar: MatSnackBar, private api: SpacexApiService) {}

  apiErrorListener(error: ApiError) {
    this.snackBar.open(error.message, "Ok", {
      duration: 10000
    });
  }

  ngOnInit() {
    this.api.addErrorListener(this.apiErrorListener.bind(this));
  }
}
