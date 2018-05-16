import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../../app.component";
import { CompanyInfoComponent } from "../../components/company-info/company-info.component";
import { RocketListComponent } from "../../components/rocket-list/rocket-list.component";
import { LaunchesListComponent } from "../../components/launches-list/launches-list.component";
import { LaunchComponent } from "../../components/launch/launch.component";

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
  },
  {
    path: "launches",
    component: LaunchesListComponent
  },
  {
    path: "launches/:id",
    component: LaunchComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
