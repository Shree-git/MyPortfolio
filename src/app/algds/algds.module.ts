import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgoComponent } from './algo/algo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlgdsComponent } from './algds.component';
import { IntroComponent } from './intro/intro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AlgdsComponent,
    AlgoComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AlgdsModule { }
