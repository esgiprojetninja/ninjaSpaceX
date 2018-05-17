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
  constructor(private detailedCoreService: DetailedCoreService) {}

  ngOnInit() {
    this.isLoading = true;
    this.detailedCoreService.fetchAllDetailedCores().subscribe(data => {
      this.detailedCores = data;
      this.isLoading = false;
    });
  }
}
