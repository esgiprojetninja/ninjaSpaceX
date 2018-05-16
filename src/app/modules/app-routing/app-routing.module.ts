import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../../app.component";
import { CompanyInfoComponent } from "../../components/company-info/company-info.component";
import { RocketListComponent } from "../../components/rocket-list/rocket-list.component";

const appRoutes: Routes = [
  {
    path: "",
    component: CompanyInfoComponent
  },
  {
    path: "companyInfo",
    component: CompanyInfoComponent
  },
  {
    path: "rockets",
    component: RocketListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
