import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from '../personal-profile.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  
  constructor(private personalProfileService:PersonalProfileService) { }
  
    ngOnInit() {
      this.personalProfileService.getBooks().subscribe((data)=>{
        console.log(data);
      })
    }
}
