import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

  constructor(private rocketService: RocketService, private route: ActivatedRoute) { }

  getBoostersDisplay(): string {
    return this.selectedRocket.boosters > 1 ?
      this.selectedRocket.boosters + " boosters"
      : this.selectedRocket.boosters > 0 ?
        "1 booster" : "No boosters";
  }

  selectRocket(rocket: Rocket) {
    this.selectedRocket = rocket;
    this.currentBackground = this.getRocketImage(rocket.id);
    this.panelOpenState = false;
  }

  ngOnInit() {
    this.panelOpenState = false;
    this.isLoading = true;
    this.rockets$ = this.rocketService.fetchAll();

    this.route.params.subscribe((params: any) => {
      this.subscriber = this.rockets$.subscribe((rockets: Rocket[]) => {
        let defaultRocket = rockets[0];
        const matchedRocket = rockets.find((rocket: Rocket) => rocket.id === params.id);
        if (params && params.id && matchedRocket) {
          defaultRocket = matchedRocket;
        }
        this.isLoading = false;
        this.selectRocket(defaultRocket);
      });
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
