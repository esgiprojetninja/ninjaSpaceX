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

  getImgUrlFromId(rocketId: string): string {
    switch (rocketId) {
      case "falconheavy":
        // tslint:disable-next-line
        return "http://www.spacex.com/sites/spacex/files/styles/new_gallery_listing_thumb/public/2012_-_9_crs1_launch.jpg?itok=EtPiSHip";
      case "falcon9":
        // tslint:disable-next-line
        return "http://www.spacex.com/sites/spacex/files/styles/new_gallery_listing_thumb/public/first_reflight_-_11_ses10_l-0_-_landing_cam02_-_040117_-_img_968528.jpg?itok=FYF15oRe";
      case "falcon1":
        // tslint:disable-next-line
        return "http://www.spacex.com/sites/spacex/files/styles/new_gallery_listing_thumb/public/2008_-_02_default_falcon_1_flight_4_2008.jpg?itok=Njbypa8h";
      default:
        // tslint:disable-next-line
        return "http://www.spacex.com/sites/spacex/files/styles/new_gallery_listing_thumb/public/2013_-_11_vandenberg_sunset_rocket_on_pad.jpg?itok=V6n_blKj";
    }
  }
}
