import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {path:'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
