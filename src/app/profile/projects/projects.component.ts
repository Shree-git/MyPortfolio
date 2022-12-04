import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProjects().subscribe((res) => (this.projects = res));
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
