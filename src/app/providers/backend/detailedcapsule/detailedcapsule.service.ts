import { Injectable } from '@angular/core';
import { SpacexApiService } from "../spacex-api.service";
import { Observable } from "rxjs";
import { DetailedCapsule } from "../../../models/DetailedCapsule";

@Injectable({
  providedIn: 'root'
})
export class DetailedcapsuleService {

  constructor(private appService: SpacexApiService) { }

  fetchAllDetailedCapsules(): Observable<DetailedCapsule[]> {
    return this.appService.get("parts/caps");
  }

  fetchDetailedCapsule(detailedcapsuleId: string): Observable<DetailedCapsule> {
    return this.appService.get(`parts/caps/${detailedcapsuleId}`);
  }
}
