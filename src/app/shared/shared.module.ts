import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { PointsButton } from './points-button/points-button.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [HeaderComponent, TabsComponent, PointsButton],
  exports: [HeaderComponent, TabsComponent, PointsButton],
})
export class SharedModule {}
