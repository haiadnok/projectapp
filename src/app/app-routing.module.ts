import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TrainersComponent } from './trainers/trainers.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
     
  },
  {
    path:'trainer',
    component:TrainersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
