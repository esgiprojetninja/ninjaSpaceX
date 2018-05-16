import { Component, OnInit } from "@angular/core";
import { CompanyInfo } from "../../models/CompanyInfo";
import { CompanyService } from "../../providers/backend/company/company.service";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.css"]
})
export class CompanyInfoComponent implements OnInit {
  public companyInfo: CompanyInfo;
  public isLoading: boolean;

  constructor(private companyService: CompanyService) {}


  ngOnInit(): void {
    this.isLoading = true;
    this.companyService
      .getCompanyInfo()
      .subscribe(data => {
        this.companyInfo = data;
        this.isLoading = false;
      });
  }
}
