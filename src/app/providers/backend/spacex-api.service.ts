import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SpacexApiService {
  baseUrl = "https://api.spacexdata.com/v2/";

  constructor() {}
}
