import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
})
export class LeaderboardPage implements OnInit {
  points$ = this.pointsService.getAllGamePoints();

  constructor(private pointsService: PointsService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.points$ = this.pointsService.getAllGamePoints();
  }
}
