import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-leadership",
  templateUrl: "./leadership.component.html",
  styleUrls: ["./leadership.component.scss"],
})
export class LeadershipComponent implements OnInit {
  leadershipexp;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getLeadershipExp()
      .subscribe((res) => (this.leadershipexp = res));
  }
}
