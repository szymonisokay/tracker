import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IPointsButton,
  PointsButtonEvent,
  PointsButtonTypes,
} from '../models/game.model';

import * as _ from 'lodash';
import { PointsService } from './points.service';

@Injectable({ providedIn: 'root' })
export class GameService {
  private pointsButtons$ = new BehaviorSubject<IPointsButton[]>([]);
  private interval: ReturnType<typeof setInterval>;

  isGameStarted$ = new BehaviorSubject<boolean>(false);
  isGameOver$ = new BehaviorSubject<boolean>(false);

  constructor(private pointsService: PointsService) {}

  private getPointsButtons(): IPointsButton[] {
    return this.pointsButtons$.value;
  }

  getPointsButtons$(): Observable<IPointsButton[]> {
    return this.pointsButtons$;
  }

  startGame(): void {
    this.interval = setInterval(() => this.createButton(), 2000);
    this.isGameStarted$.next(true);
    this.isGameOver$.next(false);
    this.pointsService.resetPoints();
  }

  calculatePoints(pointsButtonEvent: PointsButtonEvent): void {
    let buttons = this.getPointsButtons();

    buttons = _.filter(buttons, (button) => button.id !== pointsButtonEvent.id);

    this.pointsButtons$.next(buttons);
    this.pointsService.addPoints(pointsButtonEvent.points);
  }

  cancelGame(): void {
    clearInterval(this.interval);
    this.pointsButtons$.next([]);
    this.isGameStarted$.next(false);
    this.isGameOver$.next(true);
  }

  private createButton(): void {
    const generatedType = _.sample(PointsButtonTypes);

    if (!generatedType) return;

    let pointButton: IPointsButton = {} as IPointsButton;

    const buttons = this.pointsButtons$.value.filter(
      (btn) => btn.type === 'success'
    );

    if (buttons.length === 5) {
      pointButton = {
        id: Math.random(),
        type: 'danger',
        points: -5,
        position: this.generatePosition(),
      };
    } else {
      pointButton = {
        id: Math.random(),
        type: generatedType,
        points: generatedType === 'success' ? 10 : -5,
        position: this.generatePosition(),
      };
    }

    this.pointsButtons$.next([...this.pointsButtons$.value, pointButton]);
  }

  private generatePosition(): { x: number; y: number } {
    const windowWidth = window.innerWidth - 100;
    const windowHeight = window.innerHeight - 260;

    return {
      x: this.randomNumberFromRange(0, windowWidth),
      y: this.randomNumberFromRange(0, windowHeight),
    };
  }

  private randomNumberFromRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
