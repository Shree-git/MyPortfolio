import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-honors",
  templateUrl: "./honors.component.html",
  styleUrls: ["./honors.component.scss"],
})
export class HonorsComponent implements OnInit {
  honorsData;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getHonors().subscribe((res) => (this.honorsData = res));
  }
}
