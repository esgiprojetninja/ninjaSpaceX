import { Component, OnInit } from "@angular/core";
import { CompanyInfo } from "../../models/CompanyInfo";
import { CompanyService } from "../../providers/backend/company/company.service";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.css"]
})
export class CompanyInfoComponent implements OnInit {
  constructor(private companyService: CompanyService) {}

  companyInfo: CompanyInfo;

  ngOnInit(): void {
    this.companyService
      .getCompanyInfo()
      .subscribe(data => (this.companyInfo = data));
  }
}
