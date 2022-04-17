import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from '../personal-profile.service';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.scss']
})
export class MyMusicComponent implements OnInit {
  myMusic;

  constructor(private personalProfileService: PersonalProfileService) {

    this.myMusic = [
      "3RBKIjVDVFf9JP1q02p5rw",
      "1N6J9XX95mcCktZ75rsbk4",
    ]
   }

  ngOnInit(): void {
    
  }

}
