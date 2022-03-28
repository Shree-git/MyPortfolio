import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PersonalProfileService {
  booksURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwP2WXiiwh1tDImkXMhAgzmYpN39kLKazGUooH6fORPZS4FZKdjvPbKl80tLFP5M6GiDKBEelCrf9/pub?output=csv"
  moviesURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqPtigQmAstMkqZBV7L6HwXoSqZxleKEVvklRqpF9LvKPoe4I7EZiafrBimX11-241VUsYYQFJP3a-/pub?output=csv"

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(
      this.booksURL,
      { responseType: 'text' }
    );
  }

  getMovies(): Observable<any>{
    return this.http.get(
      this.moviesURL,
      { responseType: 'text' }
    )
  }

  getMyMusic(){
    return myMusic;
  }
}

const myMusic = [
  "https://open.spotify.com/embed/track/3RBKIjVDVFf9JP1q02p5rw?utm_source=generator",
  "https://open.spotify.com/embed/track/1N6J9XX95mcCktZ75rsbk4?utm_source=generator",
]