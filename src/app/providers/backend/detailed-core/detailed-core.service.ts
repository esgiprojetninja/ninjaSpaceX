import { Injectable } from "@angular/core";
import { SpacexApiService } from "../spacex-api.service";
import { Observable } from "rxjs";
import { DetailedCore } from "../../../models/DetailedCore";

@Injectable({
  providedIn: "root"
})
export class DetailedCoreService {
  constructor(private appService: SpacexApiService) {}

  fetchAllDetailedCores(): Observable<DetailedCore[]> {
    return this.appService.get("parts/cores");
  }

  fetchDetailedCore(detailedCoreId: string): Observable<DetailedCore> {
    return this.appService.get(`parts/cores/${detailedCoreId}`);
  }
}
