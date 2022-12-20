import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PointsButtonEvent } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { PointsService } from 'src/app/services/points.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
})
export class GamePage implements OnInit {
  isGameStarted$ = this.gameService.isGameStarted$;
  isGameOver$ = this.gameService.isGameOver$;
  pointsButtons$ = this.gameService.getPointsButtons$();
  points$ = this.pointsService.getPoints$();
  countdownTimer$ = this.timerService.getTimer$();

  constructor(
    private gameService: GameService,
    private timerService: TimerService,
    private pointsService: PointsService
  ) {}

  ngOnInit() {
    this.countdownTimer$
      .pipe(
        tap((time) => {
          if (time === 0) {
            setTimeout(() => {
              this.gameFinished();
            }, 1000);
          }
        })
      )
      .subscribe();
  }

  ionViewDidLeave() {
    this.timerService.clearTimer();
  }

  startGame() {
    this.timerService.startTimer();
    this.gameService.startGame();
  }

  gameFinished() {
    this.pointsService.storePoints().subscribe();
  }

  onPointsButtonClick(pointsButtonEvent: PointsButtonEvent) {
    this.gameService.calculatePoints(pointsButtonEvent);
  }
}
