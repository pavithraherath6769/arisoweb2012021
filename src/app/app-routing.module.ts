import { DevelopersComponent } from './developers/developers.component';
import { DirectorsComponent } from './directors/directors.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'directors', component:DirectorsComponent},
  {path:'developers', component:DevelopersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
