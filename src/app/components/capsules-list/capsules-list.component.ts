import { Component, OnInit } from "@angular/core";
import { Capsule } from "../../models/Capsule";
import { CapsuleService } from "../../providers/backend/capsule/capsule.service";

@Component({
  selector: "app-capsules-list",
  templateUrl: "./capsules-list.component.html",
  styleUrls: ["./capsules-list.component.css"]
})
export class CapsulesListComponent implements OnInit {
  capsules: Capsule[];
  isLoading: boolean;
  constructor(private capsuleService: CapsuleService) {}

  ngOnInit() {
    this.isLoading = true;
    this.capsuleService.fetchAllCapsules().subscribe(data => {
      this.capsules = data;
      this.isLoading = false;
    });
  }
}
