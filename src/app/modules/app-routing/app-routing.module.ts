import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../../app.component";
import { CompanyInfoComponent } from "../../components/company-info/company-info.component";
import { LaunchesListComponent } from "../../components/launches-list/launches-list.component";
import { LaunchComponent } from "../../components/launch/launch.component";
import { CapsulesListComponent } from "../../components/capsules-list/capsules-list.component";
import { CapsuleComponent } from "../../components/capsule/capsule.component";

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
    path: "launches",
    component: LaunchesListComponent
  },
  {
    path: "launches/:id",
    component: LaunchComponent
  },
  {
    path: "capsules",
    component: CapsulesListComponent
  },
  {
    path: "capsules/:id",
    component: CapsuleComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
