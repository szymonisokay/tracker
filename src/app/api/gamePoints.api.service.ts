import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getEndpoint } from '../config/api-endpoints.config';

@Injectable({ providedIn: 'root' })
export class GamePointsApi {
  constructor(private http: HttpClient) {}

  storeGamePoints(points: number) {
    const endpoint = getEndpoint('storeGamePoints').path;

    return this.http.post(endpoint, { points });
  }

  getUserGamePoints() {
    const endpoint = getEndpoint('getUserGamePoints').path;

    return this.http.get<any>(endpoint);
  }

  getAllGamePoints() {
    const endpoint = getEndpoint('getAllGamePoints').path;

    return this.http.get<any>(endpoint);
  }
}
