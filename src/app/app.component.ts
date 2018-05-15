import { Component, OnInit } from "@angular/core";
import { SpacexApiService } from "./providers/backend/spacex-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(private spaceXService: SpacexApiService) {}

  ngOnInit(): void {
    this.spaceXService
      .getCompanyInfo()
      .subscribe(data => console.log(JSON.stringify(data)));
    this.spaceXService
      .getLatestLaunch()
      .subscribe(data => console.log(JSON.stringify(data)));
    this.spaceXService
      .getPastLaunches()
      .subscribe(data => console.log(JSON.stringify(data)));
    this.spaceXService
      .getUpcomingLaunches()
      .subscribe(data => console.log(JSON.stringify(data)));
    this.spaceXService
      .getAllLaunches()
      .subscribe(data => console.log(JSON.stringify(data)));
    this.spaceXService
      .getFilteredLaunches()
      .subscribe(data => console.log(JSON.stringify(data)));
  }
}
