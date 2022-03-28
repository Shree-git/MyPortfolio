import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalProfileComponent } from './personal-profile.component';
import { BooksComponent } from './books/books.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    PersonalProfileComponent,
    HeaderComponent,
    BooksComponent,
    FooterComponent,
    SplitPipe,
  ],
 
})
export class PersonalProfileModule { }
