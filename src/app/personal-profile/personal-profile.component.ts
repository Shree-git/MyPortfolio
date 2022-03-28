import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  constructor(
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 2000);
  }

}
