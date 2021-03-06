import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgdsComponent } from './algds/algds.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: "professional",
    component: ProfileComponent,
  },
  {
    path: "personal",
    component: PersonalProfileComponent,
  },
  {
    path: "algds",
    component: AlgdsComponent,
  },
  { path: "", redirectTo: "/professional", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
