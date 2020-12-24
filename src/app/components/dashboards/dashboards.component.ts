import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {


  constructor(public route: Router, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  movieList(movielist) {
    console.log("Welcome Movie List Page>>>", movielist);
    this.SpinnerService.show()
    setTimeout(() => {
      this.route.navigate([`${movielist}`]);
      this.SpinnerService.hide()
    }, 1000);

  }

}
