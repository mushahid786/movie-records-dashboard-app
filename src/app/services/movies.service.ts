import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = "61f3da395268cd06f913fb61f89270db"

  constructor(public http: HttpClient) { }

  getTopRatedMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getUpcomingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)

  }
}

