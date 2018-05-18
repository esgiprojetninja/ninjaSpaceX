import { Component, OnInit } from "@angular/core";
import { DetailedCapsule } from "../../models/DetailedCapsule";
import { DetailedcapsuleService } from "../../providers/backend/detailedcapsule/detailedcapsule.service";

@Component({
  selector: "app-detailedcapsules-list",
  templateUrl: "./detailedcapsules-list.component.html",
  styleUrls: ["./detailedcapsules-list.component.css"]
})
export class DetailedcapsulesListComponent implements OnInit {
  filteredCapsules: DetailedCapsule[] = [];
  capsules: DetailedCapsule[];
  isLoading: boolean;
  capsuleStatus: "all" | "retired" | "active" | "unknown" = "all";
  constructor(private detailedcapsuleService: DetailedcapsuleService) {}

  changeFilter(prop, val) {
    this[prop] = val;
    if (this.capsuleStatus === "all") {
      return this.filteredCapsules = this.capsules;
    }
    this.filteredCapsules = this.capsules.filter((capsule: DetailedCapsule) =>
      capsule.status === this.capsuleStatus
    );
  }

  ngOnInit() {
    this.isLoading = true;
    this.detailedcapsuleService.fetchAllDetailedCapsules().subscribe(data => {
      this.capsules = data;
      this.filteredCapsules = data;
      this.isLoading = false;
    });
  }

}
