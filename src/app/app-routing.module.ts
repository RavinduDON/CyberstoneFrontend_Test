import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {TermsConditionsComponent} from "./terms-conditions/terms-conditions.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {CategoryComponent} from "./category/category.component";
import {ContactComponent} from "./contact/contact.component";
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "terms",
    component: TermsConditionsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "editprofile",
    component: EditProfileComponent
  },
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/home"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
