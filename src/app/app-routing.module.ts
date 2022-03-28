import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: "", redirectTo: "/professional", pathMatch: "full" },
  {
    path: "professional",
    component: ProfileComponent,
  },
  {
    path: "personal",
    component: PersonalProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
