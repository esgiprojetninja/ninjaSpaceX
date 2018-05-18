import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm} from "@angular/forms";
import { Launch } from "src/app/models/Launch";
import { LaunchService } from "../../providers/backend/launch/launch.service";
import { ApiError } from "src/app/typings/ServiceError";
import { Router, NavigationExtras } from "@angular/router";
import { LaunchFilters } from "src/app/models/LaunchFilters";

@Component({
  selector: "app-launches-list",
  templateUrl: "./launches-list.component.html",
  styleUrls: ["./launches-list.component.css"]
})

export class LaunchesListComponent implements OnInit{
  public launches: Launch[];
  public isLoading: boolean;
  public yearLaunched: string;
  yearLaunchedText: string = this.yearLaunched;
  public launchSuccess: boolean;
  radioLaunchSuccessInput: boolean = this.launchSuccess;

  constructor(private launchService: LaunchService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.launchService.fetchAllLaunches().subscribe((data: Launch[]) => {
      this.launches = data;
      this.isLoading = false;
    });
  }

  radioChange(prop: true | false | "all") {
    this.radioLaunchSuccessInput = prop === "all" ? null : prop;
  }

  onSubmit(form: NgForm): void {
    this.isLoading = true;
    this.yearLaunched = form.value.yearLaunched;
    this.launchSuccess = this.radioLaunchSuccessInput;
    const params: LaunchFilters = {};
    if (typeof this.yearLaunched !== "undefined") {
      params.launch_year = this.yearLaunched;
    }
    if (this.launchSuccess !== null) {
      params.launch_success = this.launchSuccess;
    }
    
    this.launchService.fetchFilteredLaunches(params).subscribe((data: Launch[]) => {
      this.launches = data;
      this.isLoading = false;
    });
  }
}