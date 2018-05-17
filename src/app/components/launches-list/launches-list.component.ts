import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Launch } from "src/app/models/Launch";
import { LaunchService } from "../../providers/backend/launch/launch.service";
import { ApiError } from "src/app/typings/ServiceError";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-launches-list",
  templateUrl: "./launches-list.component.html",
  styleUrls: ["./launches-list.component.css"]
})
export class LaunchesListComponent implements OnInit {
  public launches: Launch[];
  public isLoading: boolean;
  public yearLaunched: string;

  constructor(private launchService: LaunchService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.launchService.fetchAllLaunches().subscribe((data: Launch[]) => {
      this.launches = data;
      this.isLoading = false;
    });
  }

  onSubmit(form: NgForm): void {
    this.isLoading = true;
    this.yearLaunched = form.value.yearLaunched;
    this.launchService.fetchFilteredLaunches({launch_year: this.yearLaunched}).subscribe((data: Launch[]) => {
      this.launches = data;
      this.isLoading = false;
    });
  }
}