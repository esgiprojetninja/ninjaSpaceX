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
  private subscriber: Subscription;
  public isLoading: boolean;
  public rockets$: Observable<Rocket[]>;
  public selectedRocket: Rocket;
  public currentBackground: string;
  public panelOpenState: boolean;

  constructor(private rocketService: RocketService) { }

  getBoostersDisplay(): string {
    return this.selectedRocket.boosters > 1 ?
      this.selectedRocket.boosters + " boosters"
      : this.selectedRocket.boosters > 0 ?
        "1 booster" : "No boosters";
  }

  selectRocket(rocket: Rocket) {
    this.selectedRocket = rocket;
    this.currentBackground = this.getRocketImage(rocket.id);
  }

  ngOnInit() {
    this.panelOpenState = false;
    this.isLoading = true;
    this.rockets$ = this.rocketService.fetchAll();
    this.subscriber = this.rockets$.subscribe((rockets: Rocket[]) => {
      this.isLoading = false;
      this.selectRocket(rockets[0]);
    });
  }

  getRocketImage(rocketId): string {
    return this.rocketService.getImgUrlFromId(rocketId);
  }

  ngOnDestroy() {
    if (this.subscriber.closed) {
      return;
    }
    this.subscriber.unsubscribe();
  }
}
