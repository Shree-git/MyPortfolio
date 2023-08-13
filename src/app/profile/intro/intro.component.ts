import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  cvUrl;
  title;
  socialInfo;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getResume().subscribe((res) => (this.cvUrl = res));
    this.profileService.getTitle().subscribe((res) => (this.title = res));
    this.profileService.getSocialInfo().subscribe((res) => (this.socialInfo = res));
  }
}
