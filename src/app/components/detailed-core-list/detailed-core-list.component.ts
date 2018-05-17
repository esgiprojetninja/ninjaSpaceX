import { Component, OnInit } from "@angular/core";
import { DetailedCore } from "../../models/DetailedCore";
import { DetailedCoreService } from "../../providers/backend/detailed-core/detailed-core.service";

@Component({
  selector: "app-detailed-core-list",
  templateUrl: "./detailed-core-list.component.html",
  styleUrls: ["./detailed-core-list.component.css"]
})
export class DetailedCoreListComponent implements OnInit {
  isLoading: boolean;
  detailedCores: DetailedCore[];
  filteredDetailedCores: DetailedCore[] = [];
  landingFilter: false | true | "all" = "all";
  asdsFilter: false | true | "all" = "all";
  rtlsFilter: false | true | "all" = "all";
  constructor(private detailedCoreService: DetailedCoreService) {}

  private filterCores() {
    this.filteredDetailedCores = this.detailedCores.filter((core: DetailedCore) => {
      if ((core.water_landing === this.landingFilter || this.landingFilter === "all")
        && (core.rtls_attempt === this.rtlsFilter || this.rtlsFilter === "all")
        && (core.asds_attempt === this.asdsFilter || this.asdsFilter === "all")
      ) {
        return core;
      }
    });
  }

  changeFilter(prop: string, val: true | false | "all") {
    this[prop] = val;
    this.filterCores();
  }

  ngOnInit() {
    this.isLoading = true;
    this.detailedCoreService.fetchAllDetailedCores().subscribe(data => {
      this.detailedCores = data;
      this.filteredDetailedCores = data;
      this.isLoading = false;
    });
  }
}
