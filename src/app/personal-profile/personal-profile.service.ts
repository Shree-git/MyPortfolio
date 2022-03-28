import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PersonalProfileService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwP2WXiiwh1tDImkXMhAgzmYpN39kLKazGUooH6fORPZS4FZKdjvPbKl80tLFP5M6GiDKBEelCrf9/pub?output=csv",
      { responseType: 'text' }
    );
  }
}
