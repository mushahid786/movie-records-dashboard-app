import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any
  imageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"
  constructor() { }

  ngOnInit(): void {
  }

}
