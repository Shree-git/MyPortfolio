import { Component, OnInit } from '@angular/core';
import { SortPipe } from 'src/app/sort.pipe';
import { PersonalProfileService } from '../personal-profile.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any = [];
   config: any;
   allMoviesConfig: any
   allMovies: any = [];

  constructor(private personalProfileService:PersonalProfileService, private sortPipe: SortPipe) { }
  
    ngOnInit() {
      this.personalProfileService.getMovies().subscribe((data)=>{
        const movies = data.split('\r\n');
        movies.splice(0,2)
        movies.forEach(element => {
          const el = element.split(',');
          
          (el[1] && this.movies.push({
            id: el[0],
            name: el[1],
            rating: el[2],
            year: el[3],
            date_watched: el[4]
          }))
        });
      })
      this.personalProfileService.getAllMovies().subscribe((data)=>{
        const allMovies = data.split('\r\n');
        allMovies.splice(0,2)
        allMovies.forEach(element => {
          const el = element.split(',');

          (el[1] && this.allMovies.push({
            id: el[0],
            name: el[1],
            rating: el[2],
            year: el[3]
          }))
        });
        this.allMovies = this.sortPipe.transform(this.allMovies, 'desc', 'rating');
      })
      this.config = {
        id: "paginationCurrentMovies",
        itemsPerPage: 8,
        currentPage: 1,
        totalItems: this.movies.length
      };
      this.allMoviesConfig = {
        id: "paginationAllMovies",
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: this.allMovies.length
      }
    }

  pageChanged(event){
    this.config.currentPage = event;
  }

  pageChangedAllMovies(event){
    this.allMoviesConfig.currentPage = event;
  }
}
