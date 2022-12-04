import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html",
  styleUrls: ["./reference.component.scss"],
})
export class ReferenceComponent implements OnInit {
  references;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService
      .getReferences()
      .subscribe((res) => (this.references = res));
  }
}
