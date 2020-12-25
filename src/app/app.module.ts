import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxSpinnerModule } from "ngx-spinner";
import { MovieCardComponent } from './pages/movie-card/movie-card.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    DashboardsComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [NgxSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
