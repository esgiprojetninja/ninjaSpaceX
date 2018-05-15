import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CompanyInfo } from "../../../models/CompanyInfo";
import { SpacexApiService } from "../spacex-api.service";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  constructor(private appService: SpacexApiService) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.appService.get("info");
  }
}
