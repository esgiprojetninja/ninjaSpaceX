import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { DetailedCapsule } from "../../models/DetailedCapsule";
import { DetailedcapsuleService } from "../../providers/backend/detailedcapsule/detailedcapsule.service";

@Component({
  selector: "app-detailedcapsule",
  templateUrl: "./detailedcapsule.component.html",
  styleUrls: ["./detailedcapsule.component.css"]
})
export class DetailedcapsuleComponent implements OnInit {
  isLoading: boolean;
  detailedcapsule: DetailedCapsule;
  constructor(
    private route: ActivatedRoute,
    private detailedcapsuleService: DetailedcapsuleService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.detailedcapsuleService
        .fetchDetailedCapsule(params.id)
        .subscribe(data => {
          this.detailedcapsule = data;
          this.isLoading = false;
        });
    });
  }
}
