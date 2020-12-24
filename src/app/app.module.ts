import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { TopratedMoviesListComponent } from './pages/toprated-movies-list/toprated-movies-list.component';
import { UpcomingMoviesListComponent } from './pages/upcoming-movies-list/upcoming-movies-list.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    TopratedMoviesListComponent,
    UpcomingMoviesListComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
