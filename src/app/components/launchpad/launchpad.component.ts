import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Launchpad } from "../../models/Launchpad";
import { LaunchpadService } from "../../providers/backend/launchpad/launchpad.service";

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  isLoading: boolean;
  launchpad: Launchpad;
  constructor(
    private route: ActivatedRoute,
    private launchpadService: LaunchpadService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.launchpadService.fetchLaunchpad(params.id).subscribe(data => {
        this.launchpad = data;
        this.isLoading = false;
      });
    });
  }

}
