import { Injectable } from "@angular/core";
import { SpacexApiService } from "../spacex-api.service";
import { Observable } from "rxjs";
import { Launchpad } from "../../../models/Launchpad";

@Injectable({
  providedIn: "root"
})
export class LaunchpadService {
  constructor(private appService: SpacexApiService) {}

  fetchAllLaunchpads(): Observable<Launchpad[]> {
    return this.appService.get("launchpads");
  }

  fetchLaunchpad(launchpadId: string): Observable<Launchpad> {
    return this.appService.get(`launchpads/${launchpadId}`);
  }
}
