import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from '../personal-profile.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private personalProfileService:PersonalProfileService) { }
  
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
        console.log(this.movies)
      })
    }
}
