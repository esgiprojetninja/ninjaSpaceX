import { Component, OnInit } from "@angular/core";
import { SpacexApiService } from "src/app/providers/backend/spacex-api.service";
import { CompanyInfo } from "../models/CompanyInfo";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.css"]
})
export class CompanyInfoComponent implements OnInit {
  constructor(private spaceXService: SpacexApiService) {}

  companyInfo: CompanyInfo;

  ngOnInit(): void {
    this.spaceXService
      .getCompanyInfo()
      .subscribe(data => (this.companyInfo = data));
  }
}
