import { IUser } from './user.model';

export interface IPointsButton {
  id: number;
  points: Points;
  type: Type;
  position: Position;
}

interface Position {
  x: number;
  y: number;
}

type Points = 10 | -5;
type Type = 'success' | 'danger';

export interface PointsButtonEvent {
  id: number;
  points: number;
}

export const PointsButtonTypes: Type[] = ['success', 'danger'];

export interface IGamePoints {
  gamePoints: ISingleGamePoints[];
}

export interface ISingleGamePoints {
  createdAt: string;
  points: number;
  user: IUser;
  _id: string;
}
