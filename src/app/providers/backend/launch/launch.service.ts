import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Launch } from "../../../models/Launch";
import { SpacexApiService } from "../spacex-api.service";
import { ApiError } from "../../../typings/ServiceError";
import { LaunchFilters } from "src/app/models/LaunchFilters";

@Injectable({
  providedIn: "root"
})
export class LaunchService {
  constructor(private appService: SpacexApiService) {}

  fetchLatestLaunch(): Observable<Launch> {
    return this.appService.get("launches/latest");
  }

  fetchPastLaunches(): Observable<Launch[]> {
    return this.appService.get("launches");
  }

  fetchUpcomingLaunches(): Observable<Launch[]> {
    return this.appService.get("launches/upcoming");
  }

  fetchAllLaunches(): Observable<Launch[]> {
    return this.appService.get("launches/all");
  }

  fetchFilteredLaunches(params: LaunchFilters): Observable<Launch[]> {
    return this.appService.get("launches", { params });
  }
}
