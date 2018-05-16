import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Capsule } from "../../models/Capsule";
import { CapsuleService } from "../../providers/backend/capsule/capsule.service";

@Component({
  selector: "app-capsule",
  templateUrl: "./capsule.component.html",
  styleUrls: ["./capsule.component.css"]
})
export class CapsuleComponent implements OnInit {
  isLoading: boolean;
  capsule: Capsule;
  constructor(
    private route: ActivatedRoute,
    private capsuleService: CapsuleService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.capsuleService.fetchCapsule(params.id).subscribe(data => {
        this.capsule = data;
        this.isLoading = false;
      });
    });
  }
}
