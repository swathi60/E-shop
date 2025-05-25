import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../service/homePage.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homeData: any;
  constructor(private homeservice: HomePageService) {}

  ngOnInit() {
    this.homeservice.getHomePageData().subscribe({
  next: (data: any) => {
    this.homeData = data;
  }
});
  }
}