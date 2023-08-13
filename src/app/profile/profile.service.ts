import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  dataUrl = environment.dataURL;

  constructor(private http: HttpClient) {}

  getBasicInfo(): Observable<any> {
    return this.http.get(this.dataUrl + "basic-info");
  }
  getSocialInfo(): Observable<any> {
    return this.http.get(this.dataUrl + "social-info");
  }
  getTitle(): Observable<any> {
    return this.http.get(this.dataUrl + "title");
  }
  getAbout(): Observable<any> {
    return this.http.get(this.dataUrl + "about");
  }
  getAbout2(): Observable<any> {
    return this.http.get(this.dataUrl + "about2");
  }
  getResume(): Observable<any> {
    return this.http.get(this.dataUrl + "resume-url");
  }

  getSkills(): Observable<any> {
    return this.http.get(this.dataUrl + "skills");
  }

  getProjects(): Observable<any> {
    return this.http.get(this.dataUrl + "projects");
  }

  getExperiences(): Observable<any> {
    return this.http.get(this.dataUrl + "experiences");
  }

  getLeadershipExp(): Observable<any> {
    return this.http.get(this.dataUrl + "leaderships");
  }

  getHonors(): Observable<any> {
    return this.http.get(this.dataUrl + "honors");
  }

  getCourses(): Observable<any> {
    return this.http.get(this.dataUrl + "courses");
  }

  getReferences(): Observable<any> {
    return this.http.get(this.dataUrl + "references");
  }
}
