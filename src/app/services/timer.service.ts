import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameService } from './game.service';

const TIMER_COUNT = 60;

@Injectable({ providedIn: 'root' })
export class TimerService {
  private time$ = new BehaviorSubject<number>(TIMER_COUNT);
  private interval: ReturnType<typeof setInterval>;

  constructor(private gameService: GameService) {}

  getTimer$(): Observable<number> {
    return this.time$;
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.time$.value === 0) {
        this.clearTimer();
        return;
      }

      this.time$.next(this.time$.value - 1);
    }, 1000);
  }

  clearTimer(): void {
    clearInterval(this.interval);

    this.time$.next(TIMER_COUNT);
    this.gameService.cancelGame();
  }
}
