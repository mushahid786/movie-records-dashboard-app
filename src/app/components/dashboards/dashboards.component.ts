import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {


  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  movieList(type) {
    console.log("Welcome Movie type List Page>>>", type);
    this.route.navigate([`/movie/${type}`]);

  }

}
