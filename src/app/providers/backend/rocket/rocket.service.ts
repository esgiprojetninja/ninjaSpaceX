import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { SpacexApiService } from "../spacex-api.service";
import { Rocket } from "../../../models/Rocket";

@Injectable({
  providedIn: "root"
})
export class RocketService {
  constructor(private appService: SpacexApiService) { }

  fetchAll(): Observable<Rocket[]> {
    return this.appService.get("rockets");
  }

  fetchById(rocketId: string): Observable<Rocket[]> {
    return this.appService.get(`rockets/${rocketId}`);
  }
}
