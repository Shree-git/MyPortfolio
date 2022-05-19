import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PersonalProfileService {
  booksURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwP2WXiiwh1tDImkXMhAgzmYpN39kLKazGUooH6fORPZS4FZKdjvPbKl80tLFP5M6GiDKBEelCrf9/pub?output=csv"
  allBooksURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTIm4JI7sH8zyFeHjkcNl_YSEIerSc3_bDxWFt1mBhGxg_oCUje_Ir_yoREDI84gB1Wssll8kItGBB/pub?gid=1875019853&single=true&output=csv"
  moviesURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqPtigQmAstMkqZBV7L6HwXoSqZxleKEVvklRqpF9LvKPoe4I7EZiafrBimX11-241VUsYYQFJP3a-/pub?output=csv"
  allMoviesURL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqPtigQmAstMkqZBV7L6HwXoSqZxleKEVvklRqpF9LvKPoe4I7EZiafrBimX11-241VUsYYQFJP3a-/pub?gid=1486011120&single=true&output=csv"
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(
      this.booksURL,
      { responseType: 'text' }
    );
  }

  getAllBooks(): Observable<any>{
    return this.http.get(
      this.allBooksURL,
      {responseType: 'text'}
    )
  }

  getMovies(): Observable<any>{
    return this.http.get(
      this.moviesURL,
      { responseType: 'text' }
    )
  }

  getAllMovies(): Observable<any>{
    return this.http.get(
      this.allMoviesURL,
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
