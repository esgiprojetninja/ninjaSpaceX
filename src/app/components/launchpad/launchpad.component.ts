import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import {} from "@types/googlemaps";
import { Launchpad } from "../../models/Launchpad";
import { LaunchpadService } from "../../providers/backend/launchpad/launchpad.service";

@Component({
  selector: "app-launchpad",
  templateUrl: "./launchpad.component.html",
  styleUrls: ["./launchpad.component.css"]
})
export class LaunchpadComponent implements OnInit {
  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  isLoading: boolean;
  launchpad: Launchpad;
  constructor(
    private route: ActivatedRoute,
    private launchpadService: LaunchpadService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.launchpadService.fetchLaunchpad(params.id).subscribe(data => {
        this.launchpad = data;
        this.isLoading = false;
        // Set map
        const mapProps = {
          zoom: 15,
          mapTypeID: google.maps.MapTypeId.TERRAIN,
          center: new google.maps.LatLng(
            data.location.latitude,
            data.location.longitude
          )
        };
        this.map = new google.maps.Map(
          this.gmapElement.nativeElement,
          mapProps
        );
        // Set marker
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            data.location.latitude,
            data.location.longitude
          ),
          title: data.full_name
        });
        // Put marker into map
        this.marker.setMap(this.map);
      });
    });
  }
}
