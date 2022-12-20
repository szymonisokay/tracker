import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  user$ = this.authService.getUser$();

  constructor(
    private authService: AuthService,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUserFromLocalStorage();
  }

  async openActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Account options',
      buttons: [
        {
          text: 'Log out',
          handler: () => this.authService.logoutUser(),
        },
        {
          text: 'About',
          handler: () => this.router.navigate(['/about']),
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}
