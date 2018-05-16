import { Injectable } from "@angular/core";
import { SpacexApiService } from "../spacex-api.service";
import { Observable } from "rxjs";
import { Capsule } from "../../../models/Capsule";

@Injectable({
  providedIn: "root"
})
export class CapsuleService {
  constructor(private appService: SpacexApiService) {}

  fetchAllCapsules(): Observable<Capsule[]> {
    return this.appService.get("capsules");
  }
}
