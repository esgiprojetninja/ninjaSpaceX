import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./modules/app-routing/app-routing.module";
import { CompanyInfoComponent } from "./components/company-info/company-info.component";
import { LaunchesListComponent } from "./components/launches-list/launches-list.component";
import { SharedModule } from "./modules/shared/shared.module";
import { LaunchComponent } from "./components/launch/launch.component";
import { CapsulesListComponent } from "./components/capsules-list/capsules-list.component";
import { CapsuleComponent } from "./components/capsule/capsule.component";
import { LaunchpadListComponent } from './components/launchpad-list/launchpad-list.component';
import { LaunchpadComponent } from './components/launchpad/launchpad.component';
import { DetailedcapsulesListComponent } from './components/detailedcapsules-list/detailedcapsules-list.component';
import { DetailedcapsuleComponent } from './components/detailedcapsule/detailedcapsule.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    LaunchesListComponent,
    LaunchComponent,
    CapsulesListComponent,
    CapsuleComponent,
    LaunchpadListComponent,
    LaunchpadComponent,
    DetailedcapsulesListComponent,
    DetailedcapsuleComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
