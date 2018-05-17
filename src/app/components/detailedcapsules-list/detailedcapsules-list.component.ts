import { Component, OnInit } from '@angular/core';
import { DetailedCapsule } from "../../models/DetailedCapsule";
import { DetailedcapsuleService } from "../../providers/backend/detailedcapsule/detailedcapsule.service";

@Component({
  selector: 'app-detailedcapsules-list',
  templateUrl: './detailedcapsules-list.component.html',
  styleUrls: ['./detailedcapsules-list.component.css']
})
export class DetailedcapsulesListComponent implements OnInit {

  detailedcapsules: DetailedCapsule[];
  isLoading: boolean;
  constructor(private detailedcapsuleService: DetailedcapsuleService) {}

  ngOnInit() {
    this.isLoading = true;
    this.detailedcapsuleService.fetchAllDetailedCapsules().subscribe(data => {
      this.detailedcapsules = data;
      this.isLoading = false;
    });
  }

}
