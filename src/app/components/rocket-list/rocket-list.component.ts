import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { RocketService } from "../../providers/backend/rocket/rocket.service";
import { Rocket } from "../../models/Rocket";

@Component({
  selector: "app-rocket-list",
  templateUrl: "./rocket-list.component.html",
  styleUrls: ["./rocket-list.component.css"]
})
export class RocketListComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public rockets$: Observable<Rocket[]>;
  private subscriber: Subscription;
  public selectedRocket: Rocket;

  constructor(private rocketService: RocketService) { }

  selectRocket(rocket: Rocket) {
    this.selectedRocket = rocket;
  }

  ngOnInit() {
    this.isLoading = true;
    this.rockets$ = this.rocketService.fetchAll();
    this.subscriber = this.rockets$.subscribe((rockets: Rocket[]) => {
      this.isLoading = false;
      this.selectedRocket = rockets[0];
    });
  }

  getRocketImage(rocketId) {
    return this.rocketService.getImgUrlFromId(rocketId);
  }

  ngOnDestroy() {
    if (this.subscriber.closed) {
      return;
    }
    this.subscriber.unsubscribe();
  }
}
