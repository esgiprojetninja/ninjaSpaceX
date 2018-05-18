import { Component, OnInit } from '@angular/core';
import { Launch } from "src/app/models/Launch";
import { LaunchService } from "../../providers/backend/launch/launch.service";
import { ApiError } from "src/app/typings/ServiceError";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-launches-home',
  templateUrl: './launches-home.component.html',
  styleUrls: ['./launches-home.component.css']
})
export class LaunchesHomeComponent implements OnInit {
  public latestLaunch: Launch;
  public upcomingLaunches: Launch[];
  public pastLaunches: Launch[];
  public isLoading: boolean;

  constructor(private launchService: LaunchService, private router: Router) {}

  ngOnInit(): void {
    const today = new Date();
    this.isLoading = true;
    this.launchService.fetchLatestLaunch().subscribe((data: Launch) => {
      this.latestLaunch = data;
      this.launchService.fetchUpcomingLaunches().subscribe((dataUpcoming: Launch[]) => {
        this.upcomingLaunches = dataUpcoming;
        for (let key in this.upcomingLaunches) {
          const value = this.upcomingLaunches[key];
          const diff = Math.abs(today.getTime() - new Date(value.launch_date_utc).getTime());
          const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
          this.upcomingLaunches[key].in_days = diffDays;
        }
        this.launchService.fetchPastLaunches().subscribe((dataPast: Launch[]) => {
          let counter = 5;
          let myArray = [];
          while(counter != 0){
            myArray.push(dataPast[counter]);
            counter--;
          }
          this.pastLaunches = myArray;
          this.isLoading = false;
        });
      });
    });
  }

}
