import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Launch } from "../../models/Launch";
import { LaunchService } from "../../providers/backend/launch/launch.service";
import { switchMap } from "rxjs/operators";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.component.html",
  styleUrls: ["./launch.component.css"]
})
export class LaunchComponent implements OnInit {
  isLoading: boolean;
  launch: Launch;
  mission_patch: SafeUrl;

  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.launchService
        .fetchFilteredLaunches({
          flight_number: params.id
        })
        .subscribe(data => {
          this.launch = data[0];
          this.mission_patch = this.sanitizer.bypassSecurityTrustUrl(
            this.launch.links.mission_patch_small
          );
          this.isLoading = false;
        });
    });
  }
}
