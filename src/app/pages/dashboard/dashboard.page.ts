import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  points$ = this.pointsService.getUsersGamePoints();

  constructor(private pointsService: PointsService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.points$ = this.pointsService.getUsersGamePoints();
  }
}
