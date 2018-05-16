import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./modules/app-routing/app-routing.module";
import { CompanyInfoComponent } from "./components/company-info/company-info.component";
import { LaunchesListComponent } from "./components/launches-list/launches-list.component";
import { SharedModule } from "./modules/shared/shared.module";

@NgModule({
  declarations: [AppComponent, CompanyInfoComponent, LaunchesListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
