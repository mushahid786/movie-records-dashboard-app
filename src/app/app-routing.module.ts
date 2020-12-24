import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { TopratedMoviesListComponent } from './pages/toprated-movies-list/toprated-movies-list.component';
import { UpcomingMoviesListComponent } from './pages/upcoming-movies-list/upcoming-movies-list.component';


const routes: Routes = [
  {
    path: "movie-list",
    component: MoviesListComponent
  },
  {
    path: "top-rated-movie-list",
    component: TopratedMoviesListComponent
  },
  {
    path: "upcoming-movie-list",
    component: UpcomingMoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
