import { Component, OnInit } from "@angular/core";
import { DetailedCore } from "../../models/DetailedCore";
import { DetailedCoreService } from "../../providers/backend/detailed-core/detailed-core.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-core",
  templateUrl: "./detail-core.component.html",
  styleUrls: ["./detail-core.component.css"]
})
export class DetailCoreComponent implements OnInit {
  isLoading: boolean;
  detailedCore: DetailedCore;
  constructor(
    private detailedCoreService: DetailedCoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.detailedCoreService.fetchDetailedCore(params.id).subscribe(data => {
        this.detailedCore = data;
        this.isLoading = false;
      });
    });
  }
}
