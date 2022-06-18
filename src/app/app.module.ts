import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileModule } from "./profile/profile.module";
import { PersonalProfileModule } from "./personal-profile/personal-profile.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PersonalProfileComponent } from "./personal-profile/personal-profile.component";
import { AppRoutingModule } from "./app-routing.module";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SortPipe } from "./sort.pipe";
import { AlgdsModule } from "./algds/algds.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ProfileModule,
    PersonalProfileModule,
    AlgdsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, SortPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
