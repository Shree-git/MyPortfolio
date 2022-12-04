import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courses;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getCourses().subscribe((res) => (this.courses = res));
  }
}
