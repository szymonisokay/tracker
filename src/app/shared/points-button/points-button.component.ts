import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPointsButton, PointsButtonEvent } from 'src/app/models/game.model';

@Component({
  selector: 'app-points-button',
  templateUrl: './points-button.component.html',
})
export class PointsButton {
  @Input() pointsButton: IPointsButton;

  @Output() onPointsButtonClick = new EventEmitter<PointsButtonEvent>();

  onButtonTouchEnd(event: TouchEvent) {
    const pointsButtonEvent: PointsButtonEvent = {
      id: this.pointsButton.id,
      points: this.pointsButton.points,
    };

    this.onPointsButtonClick.next(pointsButtonEvent);
  }
}
