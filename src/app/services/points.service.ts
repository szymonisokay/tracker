import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GamePointsApi } from '../api/gamePoints.api.service';
import { IGamePoints } from '../models/game.model';

@Injectable({ providedIn: 'root' })
export class PointsService {
  private points$ = new BehaviorSubject<number>(0);

  usersGamePoints$ = this.gamePointsApi.getUserGamePoints();

  constructor(private gamePointsApi: GamePointsApi) {}

  getPoints$(): Observable<number> {
    return this.points$;
  }

  addPoints(points: number): void {
    this.points$.next(this.points$.value + points);
  }

  resetPoints(): void {
    this.points$.next(0);
  }

  storePoints(): Observable<any> {
    return this.gamePointsApi.storeGamePoints(this.points$.value);
  }

  getUsersGamePoints(): Observable<IGamePoints> {
    return this.gamePointsApi.getUserGamePoints();
  }

  getAllGamePoints(): Observable<IGamePoints> {
    return this.gamePointsApi.getAllGamePoints();
  }
}
