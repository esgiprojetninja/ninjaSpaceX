import { Component, OnInit } from '@angular/core';
import { Launchpad } from "../../models/Launchpad";
import { LaunchpadService } from "../../providers/backend/launchpad/launchpad.service";


@Component({
  selector: 'app-launchpad-list',
  templateUrl: './launchpad-list.component.html',
  styleUrls: ['./launchpad-list.component.css']
})
export class LaunchpadListComponent implements OnInit {
  launchpads: Launchpad[];
  isLoading: boolean;
  constructor(private launchpadService: LaunchpadService) { }

  ngOnInit() {
    this.isLoading = true;
    this.launchpadService.fetchAllLaunchpads().subscribe(data => {
      this.launchpads = data;
      this.isLoading = false;
    });
  }

}
