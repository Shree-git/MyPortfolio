import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalProfileComponent } from './personal-profile.component';
import { BooksComponent } from './books/books.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { MoviesComponent } from './movies/movies.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { CubingComponent } from './cubing/cubing.component';
import { LearningComponent } from './learning/learning.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,
    MatExpansionModule
  ],
  declarations: [
    PersonalProfileComponent,
    HeaderComponent,
    IntroComponent,
    BooksComponent,
    MoviesComponent,
    FooterComponent,
    SplitPipe,
    MyMusicComponent,
    CubingComponent,
    LearningComponent,
    PhotosComponent,
  ],
 
})
export class PersonalProfileModule { }
