import { Component, OnInit } from '@angular/core';
import { json } from 'express';
import { PersonalProfileService } from '../personal-profile.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any = [];
  jsonBooks: [];

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
        console.log(this.books);
      })
    }
}
