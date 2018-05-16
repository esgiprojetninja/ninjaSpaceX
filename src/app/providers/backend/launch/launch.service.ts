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
  constructor(private appService: SpacexApiService) { }

  fetchLatestLaunch(): Observable<Launch | ApiError> {
    return this.appService.get("launches/latest").pipe(
      map((res: Launch) => {
        // code métier, redux etc.
        if (!res || !res.flight_number) {
          const err: ApiError = {
            hasError: true,
            error: res,
            message: "Failed to fetch latest launch"
          };
          return err;
        }
        return res;
      })
    );
  }

  fetchPastLaunches(): Observable<Launch[] | ApiError> {
    return this.appService.get("launches");
  }

  fetchUpcomingLaunches(): Observable<Launch[] | ApiError> {
    return this.appService.get("launches/upcoming");
  }

  fetchAllLaunches(): Observable<Launch[] | ApiError> {
    return this.appService.get("launches/all");
  }

  fetchFilteredLaunches(params: LaunchFilters): Observable<Launch[] | ApiError> {
    return this.appService.get("launches", { params });
  }
}
