import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from '../personal-profile.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any = [];
  allBooks: any = [];
  config: any;
  allBooksConfig: any;

  constructor(private personalProfileService:PersonalProfileService) { }
  
    ngOnInit() {
      this.personalProfileService.getBooks().subscribe((data)=>{
        const books = data.split('\r\n');
        books.splice(0,2)
        books.forEach(element => {
          const el = element.split(',');
          
          (el[1] && this.books.push({
            id: el[0],
            name: el[1],
            author: el[2],
            rating: el[3],
            year: el[4],
            date_read: el[5]
          }))
        });
        
      })

      this.config = {
        id: "currentBooksPaginator",
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.books.length
      }

      this.personalProfileService.getAllBooks().subscribe((data)=>{
        const allBooks = data.split('\r\n');
        allBooks.splice(0,1)
        allBooks.forEach(str => {
          let s = ''
          let flag = 0
     
  for (let ch of str) {
    
    if (ch === '"' && flag === 0) {
      flag = 1;

    }
    else if (ch === '"' && flag == 1) {
      flag = 0;
     
    }
    if (ch === ',' && flag === 0){ 
    
      ch = '|'}
    if (ch !== '"') {s += ch}
  }
          
 
          const el = s.split('|');
    
          
          
          (el[5] && this.allBooks.push({
            id: el[0],
            name: el[1],
            author: el[2],
            rating: el[3],
            year: el[4],
            date_read: el[5],
            pages: el[6],
            review: el[7],
            av_rating: el[8]
          }))
        });

        
      })

      this.allBooksConfig = {
        id: "allBooksPaginator",
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: this.books.length
      }
    }

    pageChanged(event){
      this.config.currentPage = event;
    }

    pageChangedAllBooks(event){
      this.allBooksConfig.currentPage = event;
    }
}
