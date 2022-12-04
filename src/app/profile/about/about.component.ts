import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  about1;
  about2;
  basicInfo;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getAbout().subscribe((res) => (this.about1 = res));
    this.profileService.getAbout2().subscribe((res) => (this.about2 = res));
    this.profileService
      .getBasicInfo()
      .subscribe((res) => (this.basicInfo = res));
  }
}
