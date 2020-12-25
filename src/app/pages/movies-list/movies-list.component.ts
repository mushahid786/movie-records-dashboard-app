import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movieList: any
  type: any;
  constructor(private activatedRoute: ActivatedRoute, private movieServices: MoviesService, private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params.type;
      if (params.type === 'top') {
        this.SpinnerService.show();
        console.log("Top Rated Movie");
        try {
          this.movieServices.getTopRatedMovies().subscribe((response: any) => {

            console.log("Response get movie>>>>", response);
            this.movieList = response.results;
            this.SpinnerService.hide()

          })

        } catch (error) {
          this.SpinnerService.hide()
          this.movieList = [];
          console.log("Error", error);

        }

      } else if (params.type === 'upcoming') {
        console.log("Upcoming Movie");
        this.SpinnerService.show();
        try {
          this.movieServices.getUpcomingMovies().subscribe((response: any) => {

            console.log("Response get movie>>>>", response);
            this.movieList = response.results;
            this.SpinnerService.hide()

          })

        } catch (error) {
          this.SpinnerService.hide()
          this.movieList = [];
          console.log("Error", error);

        }
      }
    })

  }

}
